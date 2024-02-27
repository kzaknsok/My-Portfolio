// navbarの出し入れ処理
window.prevScrollpos = window.scrollY;

// Topへ戻るボタン
// togglerの状態でもボタンのon/offを制御
let button = document.querySelector('#back-to-top');
let toggler = document.querySelector('#toggler');

// イベントのみ定義
window.addEventListener('scroll', updateButtonDisplay);
toggler.addEventListener('click', updateButtonDisplay);

// 横スクロールボタン(3箇所)
let scrollContainers = document.querySelectorAll('.sideScroll');
let leftScrollBtns = document.querySelectorAll('.scrollLeft');
let rightScrollBtns = document.querySelectorAll('.scrollRight');

console.log(scrollContainers, leftScrollBtns, rightScrollBtns);
leftScrollBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        scrollContainers[index].scrollTo({
            left: scrollContainers[index].scrollLeft - 400,
            behavior: 'smooth'
        });
    });
});

rightScrollBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        scrollContainers[index].scrollTo({
            left: scrollContainers[index].scrollLeft + 400,
            behavior: 'smooth'
        });
    });
});

// イベントに絡める機能は関数にする
function updateButtonDisplay() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        // navbarの出し入れ処理の距離判定
        if (window.prevScrollpos > scrollPosition) {
            document.getElementById("myNavbar").style.top = "0";
        } else {
            document.getElementById("myNavbar").style.top = "-100px";
        }
        window.prevScrollpos = scrollPosition;

        // Topへ戻るボタンの表示判定
        if (scrollPosition > 100 && !toggler.checked) {
            button.style.display = 'block';
        }
        else {
            button.style.display = 'none';
        }
    };

button.addEventListener('click', () => {
    // スクロールスピード(初期)
    let speed = 1;
    // スクロールスピード(加速)
    let acceleration = 3.5;
    // スクロール間隔(ミリ秒)
    let interval = 15;
    // スクロール位置の取得
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // スクロール関数
    let scroll = setInterval(() => {
        // スクロール位置を更新
        scrollPosition -= speed;
        // スクロールを加速
        speed += acceleration;

        // スクロールが0に到達でスクロール停止
        if (scrollPosition <= 0) {
            clearInterval(scroll);
            scrollPosition = 0;
        }

        // スクロール位置を適用
        window.scrollTo(0, scrollPosition);
    }, interval);

    // デフォルトのスクロールイベントのため挙動が不安定のため未使用
    // window.scrollTo({top: 0, behavior: 'smooth'});
});
// window.onscroll = function() {
    //     var currentScrollPos = window.scrollY;    
    // }

// Topへ戻るボタン
// navbarの出し入れ処理

/** ************************************************************************************ */
// 選択したらメニューを閉じる
let menu = document.querySelector('.menu');
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggler.checked = false;
    }
});

/** ************************************************************************************ */

// DOM操作
let comment = document.querySelector('.comment');

// 各項目の文章
// btn1の文章
const content1 = `
    <h2 class="fade-in">略歴</h2>
    <p class="fade-in">24歳から10年間は病院の中央材料室というところでの診療器具の洗浄・滅菌や、手術の準備から清掃に渡る業務を遂行する企業に勤める。<br><br>医療現場ならではのルールを身に着けること。<br>器具の扱い方、大小さまざまな汚れ、破損を見つける中で集中力を養うこと。<br>病院サイドの看護師との折衝など、対人面でのスキル。<br><br>これらの習得に励み、一定の評価を頂くことがでパート社員スタートながら契約社員～正社員とステップアップする。(途中、他社からの誘いを受け転籍)<br>社員登用後はパート社員のまとめ役として、多い場合は20名ほどのスタッフを抱えて、業務にまつわる問題解決に奔走する中で、私情を挟まず相手の話を聞き出す事の重要さを知る。<br>新規業務立ち上げなどにも従事し、コミュニケーションを通して相手の考えを知る、不明点は確認しておくと云った事の重要性を改めて痛感する。<br><br>34歳からは鉄工所に就職し某農機具メーカーの部品製造に携わる。<br>ここでは主に製品の仕上がり検査と出荷業務に従事。<br>顧客の品質管理部の基準を満たすよう、また信頼を損ねない為に、小さな異常も見落とさない様よう、前職で身に着けた集中力を発揮する。<br><br>今後も仕事に対する集中力と、コミュニケーションスキルを重視して励みたい。</p>
    `;
// btn1の文章

// btn2の文章
const content2 = `
<h2 class="fade-in">Content2の紹介</h2>
<p class="fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?</p>
`;
// btn2の文章

// btn3の文章
const content3 = `
<h2 class="fade-in">Content3の紹介</h2>
<p class="fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi eius quo eum, ad distinctio, veritatis quis ipsum excepturi dolores a! Amet nisi exercitationem quos? Tenetur ea fugiat nostrum aperiam?</p>
`;
// btn3の文章

// 今後、innerHTMLは別変数に格納して管理する
function comment1() {
    comment.innerHTML = content1;
    }
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', comment1);

function comment2() {
    comment.innerHTML = content2;
    }
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', comment2);

function comment3() {
    comment.innerHTML = content3;
    }
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', comment3);

// ページが読み込まれた時に呼び出す初期値の関数
window.onload = comment1;

// DOM操作

/** ************************************************************************************ */

