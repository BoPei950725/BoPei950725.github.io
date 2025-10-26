document.addEventListener('DOMContentLoaded', () => {

    const terminalBody = document.getElementById('terminal-body');
    const commandInput = document.getElementById('command-input');
    const terminalFooter = document.querySelector('.terminal-footer .prompt');

    terminalFooter.textContent = '[patrick@portfolio ~]$';

    document.querySelector('.terminal').addEventListener('click', () => {
        commandInput.focus();
    });

    commandInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            if (command) {
                appendOutput(`<span class="prompt">[patrick@portfolio ~]$</span> <span class="output-command">${command}</span>`);
                handleCommand(command.toLowerCase());
                commandInput.value = '';
            }
        }
    });

    function handleCommand(command) {
        let output = '';

        switch (command) {
            case 'help':
                output = `
                    <p>Available commands:</p>
                    <ul>
                        <li><span class="command-highlight">profile</span>   - 顯示我的個人基本資訊</li>
                        <li><span class="command-highlight">skills</span>    - 列出我的專業與程式技能</li>
                        <li><span class="command-highlight">projects</span>  - 顯示我的大學課程專案</li>
                        <li><span class="command-highlight">contact</span>   - 顯示我的聯絡資訊</li>
                        <li><span class="command-highlight">clear</span>     - 清除終端機畫面</li>
                    </ul>
                `;
                break;

            case 'profile':
                output = `
                    <p><strong>Patrick / 劉柏霈(波沛)</strong></p>
                    <p><strong>Slogan:</strong> ""</p>
                    <p><strong>自我介紹:</strong></p>
                    <p></p>
                    <p><strong>興趣:</strong>p>
                    <p><strong>個人照片:</strong> 
                        <a href="image/profile.jpg" target="_blank">[點此查看]</a> 
                    </p>
                `;
                break;

            case 'skills':
                output = `
                    <p class="skill-category">程式語言 (Programming):</p>
                    <p class="skill-item">- Python (精熟)</p>
                    <p class="skill-item">- SQL (精熟)</p>
                    <p class="skill-item">- HTML / CSS (熟悉)</p>
                    <p class="skill-item">- JavaScript (基礎)</p>
                    
                    <p class="skill-category">資料庫 (Databases):</p>
                    <p class="skill-item">- MySQL (E-R Model 設計)</p>
                    
                    <p class="skill-category">工具 & 概念 (Tools & Concepts):</p>
                    <p class="skill-item">- Git & GitHub</p>
                    <p class="skill-item">- 資料結構與演算法</p>
                    <p class="skill-item">- Figma (UI/UX 雛型設計)</p>
                `;
                break;

            case 'projects':
                output = `    
                    <p><strong>1. 專案名稱: 個人履歷網站 (本專案)</strong></p>
                    <p>  - <strong>課程:</strong> 多媒體程式設計</p>
                    <p>  - <strong>描述:</strong> 從零開始設計並實作的一個互動式履歷網站。
                         使用 JavaScript 實現終端機的互動效果，
                         以展現獨特的技術感。</p>
                    <p>  - <strong>佐證:</strong> 
                        <a href="https://github.com/your-username/your-repo" target="_blank">[GitHub 儲存庫]</a> 
                        <a href="image/project1.png" target="_blank">[查看設計稿]</a> 
                    </p>
                `;
                break;
            
            case 'contact':
                output = `
                    <p><strong>Email:</strong> <a href="mailto:950725bopei@gmail.com">950725bopei@gmail.com</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/BoPei950725" target="_blank">github.com/BoPei950725</a></p>
                `;
                break;

            case 'clear':
                terminalBody.innerHTML = ''; 
                appendOutput(document.querySelector('.terminal-output').innerHTML);
                return; 

            default:
                output = `<p class="output-error">Command not found: ${command}</p>
                          <p>Type '<span class="command-highlight">help</span>' to see all available commands.</p>`;
                break;
        }

        appendOutput(output);
    }

    function appendOutput(html) {
        terminalBody.innerHTML += `<div class="terminal-output">${html}</div>`;
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
