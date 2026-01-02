"use client";

import React, { Component } from "react";

import Head from "next/head";

// import PageTitle from './PageTitle';

import Header from "./Header";
import Footer from "./Footer";

class Main extends Component {
	constructor(props) {
		super();
		this.state = {
			path: "",

			user: false,
			account_token: false,

			success_message: "",
			error_message: "",
		};
	}

	componentDidMount = () => {
		let success_message = localStorage.getItem("success_message");
		let error_message = localStorage.getItem("error_message");

		let account_token = localStorage.getItem("tfusertoken");
		let user = localStorage.getItem("tfuser");

		if (account_token && user) {
			let _user = JSON.parse(user);

			this.setState({ account_token: account_token });

			this.setState({ user: _user });
		} else {
			if (this.props.area && this.props.area === "profile") {
				window.location = "/account/sign-in";
			}
		}

		if (success_message) {
			localStorage.setItem("success_message", "");

			this.setState({ success_message: success_message }, () => {
				window.setTimeout(() => {
					this.setState({ success_message: "" });
				}, 5000);
			});
		}

		if (error_message) {
			localStorage.setItem("error_message", "");

			this.setState({ error_message: error_message }, () => {
				window.setTimeout(() => {
					this.setState({ error_message: "" });
				}, 5000);
			});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.error_message !== this.props.error_message &&
			this.props.error_message
		) {
			this.setState({ error_message: this.props.error_message }, () => {
				window.setTimeout(() => {
					if (this.props.removeError) {
						this.props.removeError();
					}
					this.setState({ error_message: "" });
				}, 5000);
			});
		}

		if (
			this.state.success_message !== this.props.success_message &&
			this.props.success_message
		) {
			this.setState(
				{ success_message: this.props.success_message },
				() => {
					window.setTimeout(() => {
						if (this.props.removeSuccess) {
							this.props.removeSuccess();
						}
						this.setState({ success_message: "" });
					}, 5000);
				}
			);
		}
	}

	render() {
		return (
			<div
				className={`main-wrapper ${
					this.props.className ? this.props.className : ""
				} ${this.props.page} min-h-screen`}
			>
				{this.state.success_message !== "" && (
					<div
						className="fixed bg-green-200 p-3 px-7 rounded-md text-center text-green-900 font-bold"
						style={{
							top: 20,
							left: "50%",
							marginLeft: "-300px",
							width: 600,
							zIndex: 9999999999,
						}}
						onClick={() => {
							this.setState({ success_message: "" });

							if (this.props.removeSuccess) {
								this.props.removeSuccess();
							}
						}}
					>
						{this.state.success_message}
					</div>
				)}

				{this.state.error_message !== "" && (
					<div
						className="fixed bg-red-200 p-3 px-7 rounded-md text-center text-red-900 font-bold"
						style={{
							top: 20,
							left: "50%",
							marginLeft: "-300px",
							width: 600,
							zIndex: 9999999999,
						}}
						onClick={() => {
							this.setState({ error_message: "" });

							if (this.props.removeError) {
								this.props.removeError();
							}
						}}
					>
						{this.state.error_message}
					</div>
				)}

				{/* {(this.props.hasOwnProperty('hide_header') && this.props.hide_header === true)
                    ?
                        null
                    : */}
				<Header
					page={this.props.page}
					active_page={this.props.active_page}
				/>
				{/* } */}

				<div
					className="main-content relative min-h-screen pt-[65px]"
					id="main_container"
				>
					{
						this.props.account ? (
							<>
								{/* <AccountWrapper
                                    page={this.props.page}
                                    page_title={this.props.page_title}
                                    active_page={this.props.active_page}
                                >
                                    {this.props.children}
                                </AccountWrapper> */}
							</>
						) : (
							// this.props.full_width
							//     ?

							this.props.children
						)
						// :
						//     <div className='md:container mx-4 md:mx-auto mt-4 md:mt-9 mb-9'>
						//         <div className='grid grid-cols-12 gap-2'>

						//             {this.props.page_title &&

						//                 <div className='col-span-12'>
						//                     {/* <PageTitle
						//                         title={this.props.page_title}
						//                     /> */}
						//                 </div>
						//             }

						//             <div className='col-span-12'>

						//                 {this.props.children}
						//             </div>
						//         </div>
						//     </div>
					}
				</div>

				<Footer
					page={this.props.page}
					hide_footer_promo={this.props.hide_footer_promo}
				/>
			</div>
		);
	}
}

export default Main;
