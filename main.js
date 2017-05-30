'use strict';

window.onload = function() {
  // 各コンテンツに振ったIDを列記
  var contents = ['content1', 'content2', 'content3', 'content4'];
  // 各コンテンツの位置を格納する配列を用意
  var positions = [];

  // 各コンテンツの位置を取得して格納
  contents.forEach(function(v) {
    var element = document.getElementById(v);
    // 画面上部からの絶対位置
    var top = element.getBoundingClientRect().top + window.pageYOffset;
    // コンテンツ自体の高さ
    var height = element.getBoundingClientRect().height;
    // コンテンツの縦中央を基準として格納
    positions.push(top - height / 2);
  });

  // 現在の位置を取得する関数
  var getPosition = function(s) {
    for (var i = 0, l = positions.length; i < l; i++) {
      if (s > positions[l - 1]) {
        return contents[l - 1];
      } else if (s < positions[i]) {
        return contents[i - 1];
      }
    }
  };

  // CTAボタン
  var cta = document.getElementById('signup');
  // クリックされた際にパラメータとして位置を追加する
  cta.addEventListener('click', function() {
    var position = getPosition(document.body.scrollTop);
    this.href = './signup.html?ref=' + position;
  }, false);
};
