const LESSON_SCALE = '150%';

function applyIframeStyles() {
    const iframe = document.getElementById('contentFrame');

    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow.document;

    if (!doc) return;

    const oldStyle = doc.getElementById('iframeLessonStyles');

    if (oldStyle) {
        oldStyle.remove();
    }

    const style = doc.createElement('style');
    style.id = 'iframeLessonStyles';

    style.textContent = `
        html {
            font-size: ${LESSON_SCALE};
        }

        body {
            font-family: Arial, sans-serif;
            color: #222;
            background-color: #ffffff;
            line-height: 1.65;
            padding: 32px;
            margin: 0;
            box-sizing: border-box;
        }

        p {
            margin: 0 0 1em 0;
        }

        ul, ol {
            margin: 0 0 1em 1.5em;
            padding: 0;
        }

        li {
            margin-bottom: 0.5em;
        }

        strong {
            color: #000;
        }

        h1, h2, h3, h4 {
            line-height: 1.3;
            margin: 0 0 0.8em 0;
            color: #1f2937;
        }

        code, pre {
            font-family: Consolas, Monaco, monospace;
            background-color: #f1f3f5;
            border-radius: 4px;
        }

        code {
            padding: 2px 5px;
        }

        pre {
            padding: 16px;
            overflow-x: auto;
            line-height: 1.45;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 8px 10px;
            vertical-align: top;
        }

        th {
            background-color: #f1f3f5;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        @media (max-width: 600px) {
            html {
                font-size: 125%;
            }

            body {
                padding: 20px;
            }
        }
    `;

    doc.head.appendChild(style);
}

function navigate(page, button) {
    const iframe = document.getElementById('contentFrame');

    if (!iframe) return;

    iframe.src = page;

    const buttons = document.querySelectorAll('.lesson-nav button');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (button) {
        button.classList.add('active');
    }
}

function initLessonFrame() {
    const iframe = document.getElementById('contentFrame');

    if (!iframe) return;

    iframe.addEventListener('load', applyIframeStyles);
}

document.addEventListener('DOMContentLoaded', initLessonFrame);