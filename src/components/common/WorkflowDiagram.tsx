"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";


export interface WorkflowNode {
  title: string;
  description: string;
}

export interface WorkflowDiagramProps {

  title: string;
  description?: string;
  centerLabel: string;
  leftItems: WorkflowNode[];
  rightItems: WorkflowNode[];
  bottomItems?: WorkflowNode[];
  connectorColor?: string;
  id?: string;
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

const WorkflowCard = React.forwardRef<HTMLDivElement, { node: WorkflowNode }>(
  ({ node }, ref) => (
    <div
      ref={ref}
      className="rounded-[10px] border border-blue-200 bg-gray-50 px-[24px] py-[24px]"
    >
      <h3 className="!text-[16px] !leading-[22px] !font-semibold !text-gray-900 !m-0">
        {node.title}
      </h3>
      <p className="!mt-[12px] !text-[14px] !leading-[22px] !text-gray-600 !font-normal">
        {node.description}
      </p>
    </div>
  )
);
WorkflowCard.displayName = "WorkflowCard";

export default function WorkflowDiagram({
  title,
  description,
  centerLabel,
  leftItems,
  rightItems,
  bottomItems = [],
  connectorColor = "#d1d5db",
  id,
  className = "",
}: WorkflowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState({ left: "", right: "", bottom: "" });

  const recompute = useCallback(() => {
    const container = containerRef.current;
    const workflow = workflowRef.current;
    if (!container || !workflow) return;

    const cRect = container.getBoundingClientRect();
    setSvgSize({ width: cRect.width, height: cRect.height });

    const wRect = workflow.getBoundingClientRect();
    const wMidY = wRect.top - cRect.top + wRect.height / 2;
    const wLeftX = wRect.left - cRect.left;
    const wRightX = wRect.right - cRect.left;
    const wBottomX = wRect.left - cRect.left + wRect.width / 2;
    const wBottomY = wRect.bottom - cRect.top;

    const getPoints = (
      refs: (HTMLDivElement | null)[],
      side: "left" | "right"
    ): Point[] =>
      refs
        .filter((el): el is HTMLDivElement => !!el)
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: side === "left" ? r.right - cRect.left : r.left - cRect.left,
            y: r.top - cRect.top + r.height / 2,
          };
        });

    const buildSidePath = (points: Point[], cx: number, cy: number, trunkX: number) => {
      if (points.length === 0) return "";
      const segments: string[] = [];
      points.forEach((p) => segments.push(`M ${p.x} ${p.y} L ${trunkX} ${p.y}`));
      const ys = [...points.map((p) => p.y), cy];
      segments.push(`M ${trunkX} ${Math.min(...ys)} L ${trunkX} ${Math.max(...ys)}`);
      segments.push(`M ${trunkX} ${cy} L ${cx} ${cy}`);
      return segments.join(" ");
    };

    const leftPoints = getPoints(leftRefs.current, "left");
    const rightPoints = getPoints(rightRefs.current, "right");

    let leftTrunkX = wLeftX;
    if (leftPoints.length) {
      const maxLeftX = Math.max(...leftPoints.map((p) => p.x));
      leftTrunkX = maxLeftX + (wLeftX - maxLeftX) / 2;
    }
    let rightTrunkX = wRightX;
    if (rightPoints.length) {
      const minRightX = Math.min(...rightPoints.map((p) => p.x));
      rightTrunkX = wRightX + (minRightX - wRightX) / 2;
    }

    const leftPath = buildSidePath(leftPoints, wLeftX, wMidY, leftTrunkX);
    const rightPath = buildSidePath(rightPoints, wRightX, wMidY, rightTrunkX);

    let bottomPath = "";
    const bottomEls = bottomRefs.current.filter((el): el is HTMLDivElement => !!el);
    if (bottomEls.length) {
      const segs: string[] = [];
      let prevX = wBottomX;
      let prevY = wBottomY;
      bottomEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        const x = r.left - cRect.left + r.width / 2;
        const y = r.top - cRect.top;
        segs.push(`M ${prevX} ${prevY} L ${x} ${y}`);
        prevX = x;
        prevY = r.bottom - cRect.top;
      });
      bottomPath = segs.join(" ");
    }

    setPaths({ left: leftPath, right: rightPath, bottom: bottomPath });
  }, []);

  useLayoutEffect(() => {
    recompute();
    const raf1 = requestAnimationFrame(recompute);
    const raf2 = requestAnimationFrame(() => requestAnimationFrame(recompute));
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [recompute, leftItems, rightItems, bottomItems]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    window.addEventListener("resize", recompute);

    if (typeof ResizeObserver === "undefined") {
      return () => window.removeEventListener("resize", recompute);
    }
    const ro = new ResizeObserver(() => recompute());
    ro.observe(container);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [recompute]);

  return (
    <section id={id} className={`w-full py-[64px] md:py-[96px] ${className}`}>
      <div className="mx-auto max-w-[1140px] px-[24px] lg:px-[32px]">
        {/* Header row */}
       
        <div className="flex flex-col items-center text-center">
        <h2 className="!text-[26px] !leading-[32px] sm:!text-[32px] sm:!leading-[38px] !font-medium !text-gray-900 !m-0 text-center">
            {title}
        </h2>
        {description && (
            <p className="mt-[16px] !text-[15px] !leading-[24px] !text-gray-600 !font-normal max-w-[680px] text-center">
            {description}
            </p>
        )}
        </div>

        {/* ---- Mobile: simple stacked list, no connector lines ---- */}
        <div className="mt-[40px] flex flex-col gap-[16px] md:hidden">
          {leftItems.map((node, i) => (
            <WorkflowCard key={`l-${i}`} node={node} />
          ))}
          <div className="flex items-center justify-center rounded-[10px] bg-blue-600 px-[24px] py-[18px]">
            <span className="!text-[16px] !font-semibold !text-white !m-0">
              {centerLabel}
            </span>
          </div>
          {bottomItems.map((node, i) => (
            <WorkflowCard key={`b-${i}`} node={node} />
          ))}
          {rightItems.map((node, i) => (
            <WorkflowCard key={`r-${i}`} node={node} />
          ))}
        </div>

        {/* ---- Desktop/tablet: branching diagram with connector lines ---- */}
        <div ref={containerRef} className="relative mt-[56px] hidden md:block">
          <svg
            className="pointer-events-none absolute inset-0"
            width={svgSize.width}
            height={svgSize.height}
            aria-hidden="true"
          >
            <path d={paths.left} stroke={connectorColor} strokeWidth={1.5} fill="none" />
            <path d={paths.right} stroke={connectorColor} strokeWidth={1.5} fill="none" />
            <path d={paths.bottom} stroke={connectorColor} strokeWidth={1.5} fill="none" />
          </svg>

          <div className="flex items-stretch justify-between gap-x-[64px]">
            <div className="flex flex-1 flex-col justify-around gap-[32px]">
              {leftItems.map((node, i) => (
                <WorkflowCard
                  key={i}
                  node={node}
                  ref={(el) => { leftRefs.current[i] = el; }}
                />
              ))}
            </div>

            <div className="flex w-[260px] flex-shrink-0 items-center justify-center">
              <div
                ref={workflowRef}
                className="flex w-full items-center justify-center rounded-[10px] bg-blue-600 px-[24px] py-[18px]"
              >
                <span className="!text-[16px] !font-semibold !text-white !m-0">
                  {centerLabel}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-around gap-[32px]">
              {rightItems.map((node, i) => (
                <WorkflowCard
                  key={i}
                  node={node}
                  ref={(el) => { rightRefs.current[i] = el; }}
                />
              ))}
            </div>
          </div>

          {bottomItems.length > 0 && (
            <div className="mt-[96px] flex justify-center">
              <div className="flex w-full max-w-[560px] flex-col gap-[24px]">
                {bottomItems.map((node, i) => (
                  <WorkflowCard
                    key={i}
                    node={node}
                    ref={(el) => { bottomRefs.current[i] = el; }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}