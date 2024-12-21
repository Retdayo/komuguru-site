// ページ読み込み時にフェードイン効果を付ける
document.addEventListener('DOMContentLoaded', function () {
    const profileSection = document.querySelector('.profile');
    const footerSection = document.querySelector('footer');

    // スクロール時に要素がフェードインする関数
    function handleScroll() {
        const windowHeight = window.innerHeight;
        const profileTop = profileSection.getBoundingClientRect().top;
        const footerTop = footerSection.getBoundingClientRect().top;

        // プロフィールセクションがスクロールで表示された時
        if (profileTop < windowHeight * 0.75) {
            profileSection.style.opacity = '1';
            profileSection.style.transform = 'translateY(0)';
        }

        // フッターセクションがスクロールで表示された時
        if (footerTop < windowHeight * 0.75) {
            footerSection.style.opacity = '1';
            footerSection.style.transform = 'translateY(0)';
        }
    }

    // 初期の状態で非表示にする
    profileSection.style.opacity = '0';
    profileSection.style.transform = 'translateY(30px)';
    footerSection.style.opacity = '0';
    footerSection.style.transform = 'translateY(30px)';

    // スクロールイベントをリスン
    window.addEventListener('scroll', handleScroll);

    // 最初にスクロール状態をチェック
    handleScroll();
});
