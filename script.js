const download = () => {
    // GitHubリポジトリのオーナーと名前を指定
    const owner = "Qr4xx";
    const repo = "Anal-Client";

    // GitHub APIをフェッチ
    fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // バージョン情報を取得して表示
            console.log(data);
            console.log(`https://github.com/Qr4xx/Anal-Client/releases/download/${data.tag_name}/Anal-Client-Setup-${data.name}.exe`)
        })
        .catch(error => {
            console.error("Error fetching release data:", error);
            releaseVersionElement.textContent = "Failed to fetch the latest version.";
        });
}
