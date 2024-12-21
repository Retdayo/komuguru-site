/* ベースのスタイル */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #6a4c9c;
    color: white;
    text-align: center;
    padding: 30px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2.5em;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;
}

h2 {
    color: #6a4c9c;
    font-size: 1.8em;
    margin-top: 0;
}

.profile {
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

button {
    background-color: #6a4c9c;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #5a3c8d;
}

.hidden {
    display: none;
    margin-top: 20px;
    font-size: 1.1em;
    color: #666;
}

footer {
    background-color: #6a4c9c;
    color: white;
    text-align: center;
    padding: 15px;
    position: fixed;
    width: 100%;
    bottom: 0;
}

footer p {
    margin: 0;
}

/* アニメーション */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.hidden {
    animation: fadeIn 1s ease-in-out;
}
