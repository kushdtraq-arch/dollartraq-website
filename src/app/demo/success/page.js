
import Main from '@/components/layout/Main';

import { CheckCheck } from "lucide-react";

import Button from '@/components/common/Button';

export default function Page() {
    return (
        <>
            <Main
                page="demo"
                active_page="demo"
            >
                <div className='container mx-auto mt-9 pt-9'>

                    <div className='flex items-center justify-center flex-col'>

                        <div className='w-[200px] h-[200px] bg-green-100 rounded-full flex items-center justify-center border-4 border-green-200'>
                            <CheckCheck size={80} className='text-green-600' />
                        </div>

                        <strong className='mt-9 text-2xl text-green-600'>Thank you for your query.</strong>
                        <strong className='text-md font-medium text-green-700'>We will get back to you shortly</strong>

                        <Button href="/" className="mt-6">
                            Back To Home
                        </Button>
                    </div>
                </div>
            </Main>
        </>
    );
}
