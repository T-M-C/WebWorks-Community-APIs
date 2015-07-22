/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
		app.testPluginCalls();
	},

	testButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingConnectionTest());
	},
	
	stopButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingStop());
	},

	pauseButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingPause());
	},
	
	playButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingPlay());
	},

	srcButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingGetSourceAddress());
	},

	switchButtonClick: function(){
		//app.writeOut(com.blackberry.community.nowplaying.NowPlayingSwitchMusic('http://www.pch.gc.ca/DAMAssetPub/DAM-hymChs-antSgn/STAGING/audio-audio/o-canada_1359474460106_fra.MP3'));
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingSwitchMusic('http://www.w3schools.com/html/horse.ogg'));
	},

	durationButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingGetDuration());
	},

	positionButtonClick: function(){
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingGetPosition());
	},

	aSyncCallback: function(data) {
		if (data) {
			console.log(data);
			app.writeOut(data.result);
		}
	},

	setMetaButtonClick: function(){

		var jsonData = {"Title":"MyTitle",
				"Artist":"MyArtist",
				"Album":"MyAlbum"};
		com.blackberry.community.nowplaying.NowPlayingSetMetadata(jsonData, app.aSyncCallback);

	},

	switchLocalButtonClick: function() {
		app.writeOut(com.blackberry.community.nowplaying.NowPlayingSwitchMusic('sounds/highhat.mp3'));
	},

	testPluginCalls: function() {
		if (com && com.blackberry.community.nowplaying) {
			app.writeOut("NowPlaying Result:");
			document.getElementById("testButton").onclick = app.testButtonClick;
			document.getElementById("stopButton").onclick = app.stopButtonClick;
			document.getElementById("playButton").onclick = app.playButtonClick;
			document.getElementById("switchButton").onclick = app.switchButtonClick;
			document.getElementById("pauseButton").onclick = app.pauseButtonClick;
			document.getElementById("srcButton").onclick = app.srcButtonClick;
			document.getElementById("durationButton").onclick = app.durationButtonClick;
			document.getElementById("positionButton").onclick = app.positionButtonClick;
			document.getElementById("setMetaButton").onclick = app.setMetaButtonClick;
			document.getElementById("switchLocalButton").onclick = app.switchLocalButtonClick;
		} else {
			app.writeOut("Plugin was not found");
		}
	},
	writeOut: function(message) {
		var output = document.getElementById('results');
		output.innerText = output.innerText + message;
		output.appendChild(document.createElement('br'));
		console.log(message);
	}	
};