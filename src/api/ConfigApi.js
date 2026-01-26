'use strict';

function ConfigApi(opt) {
	if (!(this instanceof ConfigApi)) {
		return new ConfigApi(opt);
	}

	opt = opt || {};

	if (!(opt.url)) {
		throw new Error('url is required');
	}

	this.classVersion = '1.0.0';
	this._setDefaultsOptions(opt);
}

ConfigApi.prototype._setDefaultsOptions = function (opt) {
	this.url = opt.url;
	this.api_url = opt.api_url;
	this.server_url = opt.server_url;
	this.isSsl = /^https/i.test(this.url);
	this.encoding = opt.encoding || 'utf8';
	this.queryStringAuth = opt.queryStringAuth || false;
	this.port = opt.port || '';
	this.timeout = opt.timeout;
	this.api_key = opt.api_key;
};

ConfigApi.prototype._request = function (method, endpoint, formData, callback) {

	var requestUrl = this._getUrl(endpoint);
	var api_key = this.api_key;

	if(method == 'POST'){

		try {

			let headers = {}

			if(formData instanceof FormData){

				headers['X-API-KEY'] = api_key;
				headers['account_token'] = `${formData.account_token}`;

				// if(formData.has('account_token')){
				
				// 	headers['Authorization'] = `Bearer ${formData.account_token}`;
				// }
			}else{

				headers['X-API-KEY'] = api_key;
				headers['Accept'] = 'application/json';
				headers['Content-Type'] = 'application/json';
				headers['account_token'] = `${formData.account_token}`;

				// if(formData.hasOwnProperty('account_token')){

				// 	headers['Authorization'] = `Bearer ${formData.account_token}`;
				// }
			}

			fetch(
				requestUrl,
				{
					method: 'POST', // or 'PUT'
					body: formData instanceof FormData ? formData : JSON.stringify(formData),
					headers: headers
				}
			).then(function (response) {

				let _response = {};

				if(typeof response === 'object'){

					_response = response.json()
				}

				return [response.status, _response];
	
			}).then((responseData) => {
				
				Promise.all(responseData).then(function(values) {

					const status = values[0];
					let response = values[1];

					if(status === 200 || status === 201){

						if(typeof callback === 'function'){
						
							callback(response);
						}
					}else{

						if(response.hasOwnProperty('code')){

							delete response.message;

							response.status = false;
							response.message = response.problems;

							delete response.problems;

							if(typeof callback == 'function'){
							
								callback(response)
							}
						}else{

							if(status === 500){

								if(typeof callback === 'function'){

									let _response = {}
									_response.status = false;

									if(!response.hasOwnProperty('message')){
									
										_response.message = "There was an error while processing your request!";
									}else{

										_response.message = response.message;
									}

									callback(_response)
								}
							}else{
						
								if(typeof callback == 'function'){

									response.status = false;
									callback(response)
								}
							}
						}
					}

					return response;
				})

			}).catch(function(error) {
				console.log('error network -', error);
				// ADD THIS THROW error
				throw error;
			});

		} catch (error) {

			console.log(error);
		}
	}else{

		try {

			if(formData){
				requestUrl += '&' + this.join(formData, '&');
			}
			return fetch(requestUrl,
			{
				headers: {
					'Cache-Control': 'no-cache'
				}
			})
			.then((response) => {
				return response.json()
			})
			.then((responseData) => {
				if (typeof callback == 'function') {

					if(responseData.hasOwnProperty('code') && responseData.code === 'no_account'){

						window.location = this.server_url + 'logout/1';
					}
					
					callback();
				}
				return responseData
			})
			.catch((error, responseData) => {
					console.log('error network -', error, responseData);
				}
			);
		} catch (error) {

			console.log(error);
		}
	}
};

ConfigApi.prototype.post = function (endpoint, formData, callback) {
	return this._request('POST', endpoint, formData, callback);
};

ConfigApi.prototype.get = function (endpoint, formData, callback) {
	return this._request('GET', endpoint, formData, callback);
};

ConfigApi.prototype.join = function (obj, separator) {
	var arr = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(key + '=' + obj[key]);
		}
	}
	;
	return arr.join(separator);
}

ConfigApi.prototype._getUrl = function (endpoint) {
	var url = '/' === this.api_url.slice(-1) ? this.api_url : this.api_url + '/';

	if(process.env.NODE_ENV === 'development'){

		url = '/api-laravel/' + endpoint;
	}else{

		url = '/api/' + endpoint;
		// url = url + endpoint;
	}

	// Include port.
	if ('' !== this.port) {
		var hostname = url; //_url.parse(url, true).hostname;
		url = url.replace(hostname, hostname + ':' + this.port);
	}

	// if (!this.isSsl) {
	// 	return this._normalizeQueryString(url);
	// }

	return url;
};

module.exports = ConfigApi;
