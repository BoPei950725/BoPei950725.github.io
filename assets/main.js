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
                        <li><span class="command-highlight">profile</span>   - 關於我 (冰山日記、標語、照片)</li>
                        <li><span class="command-highlight">skills</span>    - [動態] 我的專業與程式技能分析</li>
                        <li><span class="command-highlight">projects</span>  - 我的大學課程專案 (重點)</li>
                        <li><span class="command-highlight">contact</span>   - 如何聯絡我</li>
                        <li><span class="command-highlight">clear</span>     - 清除終端機畫面</li>
                    </ul>
                `;
                appendOutput(output);
                break;

            case 'profile':
                output = `
                    <p><strong>Patrick / 您的中文名字</strong></p>
                    <p><strong>Slogan:</strong> "快門，只捕捉冰山一角；而我，專注於海面下的全貌。"</p>
                    <br>
                    <p><strong>關於我 (冰山日記):</strong></p>
                    <p>    我習慣用「冰山日記」的視角來看待自己。您所見的，是我在海面之上的成果：
                           一個流暢運行的網站、一個符合規範的資料庫模型，或是一張構圖精準的攝影照片。</p>
                    <p>    但我的價值，存在於海面之下，那片看不見的 90%：
                           是為了找出錯誤(bug)的耐心除錯、是為了資料庫正規化反覆推敲的邏輯潔癖，
                           也是為了攝影中那個「決定性瞬間」的漫長等待與上百次失敗的嘗試。</p>
                    <br>
                    <p><strong>個人照片:</strong> 
                        <a href="image/profile.jpg" target="_blank">[點此查看 profile.jpg]</a> 
                    </p>
                `;
                appendOutput(output);
                break;

            case 'skills':
                animateSkills();
                return;

            case 'projects':
                output = `
                    <p><strong>--- 我的大學專案 (滿足作業要求) ---</strong></p>
                    
                    <p><strong>1. 專案名稱: 互動式履歷網站 (本專案)</strong></p>
                    <p>  - <strong>課程:</strong> 多媒體程式設計</p>
                    <p>  - <strong>描述:</strong> 為了滿足期中專案「版型必須自行設計」的要求，我從零開始規劃並實作了這個「模擬終端機」介面。
                         挑戰在於不使用任何現成模板，並使用 JavaScript 捕捉使用者輸入、處理指令邏輯，並動態生成 DOM 元素來顯示結果。
                         這個過程讓我對前端三劍客（HTML/CSS/JS）的協同運作有了更深的理解。</p>
                    <p>  - <strong>佐證:</strong> 
                        <a href="https://github.com/BoPei950725/BoPei950725.github.io" target="_blank">[GitHub 儲存庫]</a> 
                        <a href="image/project_terminal.png" target="_blank">[查看專案截圖.png]</a>
                    </p>
                    
                    <p><strong>2. 專案名稱: E-Commerce 資料庫設計</strong></p>
                    <p>  - <strong>課程:</strong> 資訊管理簡介 / 資料庫</p>
                    <p>  - <strong>描述:</strong> 在資料庫課程中，我們小組的任務是為一個虛構的電子商務平台設計資料庫。
                         我主要負責規劃「使用者」、「商品」與「訂單」之間的實體關聯(E-R Model)。
                         為了確保資料一致性並減少冗餘，我們將模型進行了正規化，使其符合第三正規化(3NF)標準，這對於未來系統的擴展性至關重要。</p>
                    <p>  - <strong>佐證:</strong> <a href="image/project_ERD.png" target="_blank">[查看 E-R 模型圖.png]</a></p>
                    
                    <p><strong>3. 專案名稱: 資料結構實作 (Python)</strong></p>
                    <p>  - <strong>課程:</strong> 資料結構</p>
                    <p>  - <strong>描述:</strong> 這門課讓我從理論走向實作。我使用 Python 分別實作了多種核心資料結構，
                         印象最深的是佇列 (Queue) 和堆疊 (Stack)。透過這個練習，我不僅理解了 FIFO (先進先出) 
                         和 LIFO (後進先出) 的原理，也實際練習了如何用類別(Class)來封裝資料和對應的操作方法(method)。</p>
                    <p>  - <strong>佐證:</strong> <a href="https://github.com/BoPei950725/DataStructures-Python-Demo" target="_blank">[查看 Python 程式碼]</a></p>
                `;
                appendOutput(output);
                break;
            
            case 'contact':
                output = `
                    <p><strong>Email:</strong> <a href="mailto:patrick.bopei@email.com">patrick.bopei@email.com</a> (請改成您的Email)</p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/BoPei950725" target="_blank">github.com/BoPei950725</a></p>
                    <p><strong>LinkedIn:</strong> <a href="#" target="_blank">您的 LinkedIn 連結</a></p>
                `;
                appendOutput(output);
                break;

            case 'clear':
                const welcomeMessage = terminalBody.querySelector('.terminal-output:first-child').innerHTML;
                terminalBody.innerHTML = `<div class="terminal-output">${welcomeMessage}</div>`;
                return; 

            default:
                output = `<p class="output-error">Command not found: ${command}</p>
                          <p>Type '<span class="command-highlight">help</span>' to see all available commands.</p>`;
                appendOutput(output);
                break;
        }
    }

    function appendOutput(html) {
        terminalBody.innerHTML += `<div class="terminal-output">${html}</div>`;
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function animateSkills() {
        const skills = [
            { name: 'HTML5', percent: 80, label: '(Proficient)' },
            { name: 'CSS3', percent: 75, label: '(Familiar)' },
            { name: 'JavaScript', percent: 60, label: '(Familiar)' },
            { name: 'SQL (E-R Model)', percent: 65, label: '(Familiar)' },
            { name: 'Python', percent: 50, label: '(Learning)' },
            { name: 'Git & GitHub', percent: 70, label: '(Familiar)' }
        ];

        const barChar = '█';
        const emptyChar = '░';
        const totalWidth = 25;

        let skillHTML = '<p>Running skill proficiency analysis...</p>';
        skills.forEach((skill, index) => {
            skillHTML += `
                <div class="skill-entry">
                    <span class="skill-label">${skill.name.padEnd(16, ' ')}:</span>
                    <span class="skill-bar" id="bar-${index}">[${emptyChar.repeat(totalWidth)}]</span>
                    <span class="skill-percent" id="percent-${index}">0%</span>
                </div>
            `;
        });
        appendOutput(skillHTML);

        skills.forEach((skill, index) => {
            const barElement = document.getElementById(`bar-${index}`);
            const percentElement = document.getElementById(`percent-${index}`);
            const targetWidth = Math.round((skill.percent / 100) * totalWidth);
            
            let currentWidth = 0;

            setTimeout(() => {
                const interval = setInterval(() => {
                    if (currentWidth >= targetWidth) {
                        clearInterval(interval);
                        percentElement.innerHTML = `${skill.percent}% <span class="mastery-label">${skill.label}</span>`;
                    } else {
                        currentWidth++;
                        let barContent = barChar.repeat(currentWidth) + emptyChar.repeat(totalWidth - currentWidth);
                        barElement.textContent = `[${barContent}]`;
                        
                        let currentPercent = Math.round((currentWidth / totalWidth) * 100);
                        percentElement.textContent = `${currentPercent}%`;
                    }
                }, 40);
            }, index * 200);
        });
    }
});