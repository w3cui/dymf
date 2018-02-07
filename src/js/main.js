(function(cyberplayer) {
	var config = {};
// http://helloweb.wang/ziyuangongxiang/jiaobendaima/2015-11-24/389.html
	function playerFn(join) {
		this.playlist = join.playlist;
		this.config = {
			playlist: join.item,
		};
		var date = new Date();
		this.el = "player_" + date.getTime();
		$(join.toggle + " .video-player").attr("id", this.el);
		this.playerApi = this.myPlayer();
	};
	playerFn.prototype.myPlayer = function() {
		return cyberplayer(this.el).setup({
			primary: "videojs",
			width: 650,
			height: 365,
			// autostart: true,
			primary: "html5",
			controlbar: {
				barLogo: false
			},
			playlist: this.config.playlist
		});
	};
	playerFn.prototype.remove = function() {
		this.playerApi.remove();
	};
	playerFn.prototype.onTime = function(fn) {
		this.playerApi.onTime(function(event) {
			fn(event);
			// console.log(event);
		});
	};
	playerFn.prototype.pause = function(fn) {
		this.playerApi.pause();
	};
	playerFn.prototype.play = function(fn) {
		this.playerApi.play();
	};

	playerFn.prototype.getPlaylist = function(fn) {
		return this.playerApi.getPlaylist();
	};

	playerFn.prototype.playlistItem = function(index) {
		return this.playerApi.playlistItem(index);
		this.play();
	};



	// 获取播放列表
	// myPlayer. getPlaylist();
	// 获取当前播放对象
	// myPlayer. getPlaylistItem();
	// 播放对象 index 进行播放
	// myPlayer.playlistItem(2);
	window.$player = playerFn;
})(cyberplayer);