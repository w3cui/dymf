(function(cyberplayer) {
	var config = {};

// http://cyberplayer.bcelive.com/demo/index.html

	function playerFn(join) {
		this.config = {
			file: join.file || "",
			image: join.image || ""
		};
		var date = new Date();
		this.el = "player_" + date.getTime();
		$(".video-player").attr("id", this.el);
		this.cyber = this.myPlayer();
	};
	playerFn.prototype.myPlayer = function() {
		return cyberplayer(this.el).setup({
			primary: "videojs",
			width: 650,
			height: 365,
			autostart: true,
			primary: "html5",
			controlbar: {
				barLogo: false
			},
			playlist: [ // 播放列表设置
				{
					sources: [{
						file: "http://content.bitsontherun.com/videos/bkaovAYt-52qL9xLP.mp4"
					}],
					title: "视频1"
				}, {
					sources: [{
						file: "http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hbqagik5sfq1jsai/mda-hbqagik5sfq1jsai.mp4"
					}],
					title: "视频2"
				}
			]
		});
	};
	playerFn.prototype.remove = function() {
		this.cyber.remove();
	};
	playerFn.prototype.onTime = function(fn) {
		this.cyber.onTime(function(event) {
			fn(event);
			// console.log(event);
		});
	};
	playerFn.prototype.pause = function(fn) {
		this.cyber.pause();
	};
	playerFn.prototype.play = function(fn) {
		this.cyber.play();
	};

	var pl = new playerFn({});

	function getPlayer(config) {
		var pl = new playerFn(config);

	}

	pl.onTime(function(d) {
		// console.log(d);
	});
	window.pl = pl;
})(cyberplayer);