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
                        <li><span class="command-highlight">profile</span>   - 關於我 (日誌、照片)</li>
                        <li><span class="command-highlight">skills</span>    - 我的專業與程式技能分析</li>
                        <li><span class="command-highlight">projects</span>  - 我的攝影作品集</li>
                        <li><span class="command-highlight">contact</span>   - 如何聯絡我</li>
                        <li><span class="command-highlight">clear</span>     - 清除終端機畫面</li>
                    </ul>
                `;
                appendOutput(output);
                break;

            case 'profile':
                output = `
                    <p><strong>Patrick / 波沛（劉柏霈）</strong></p>
                    <br>
                    <p><strong>[ 日誌 / 關於我 ]</strong></p>
                    <p>    午後四點。光線開始變得溫暖而傾斜。</p>
                    <p>    桌上的螢幕亮著，那裡是一個由符號和縮排構成的世界。他正試圖建造一座橋樑，讓數據從一端，毫釐不差地流向另一端。</p>
                    <p>    他的視線在第 80 行和第 81 行之間來回了三次。一個括號的錯位，整個 logique 就無法成立。</p>
                    <p>    他停了下來，揉了揉眼睛，望向窗外。</p>
                    <p>    陽光剛好穿過對面大樓的縫隙，在地板上投射出一個狹長、明亮的矩形。灰塵在光束中緩緩飛舞。</p>
                    <p>    他沒有開燈，只是靜靜地看著那個矩形。</p>
                    <p>    隨著雲的移動，矩形的光影邊緣正以肉眼難以察覺的速度，在地板上移動。他看著它從木紋的這一端，慢慢爬到那一端。</p>
                    <p>    五分鐘後，他拉上了窗簾。</p>
                    <p>    房間暗了下來，只剩下螢幕的光。他回到座位上，刪除了三行程式碼，然後用一種更簡潔的結構，重新寫了一遍。</p>
                    <br>
                    <p>Loading image: profile.jpg...</p>
                    <img src="image/profile.jpg" alt="Profile Photo" class="terminal-image profile-pic">
                `;
                appendOutput(output);
                break;

            case 'skills':
                animateSkills();
                return;

            case 'projects':
                output = `
                    <p><strong>--- 攝影作品集 ---</strong></p>
                    
                    <div class="project-gallery">
                        
                        <div class="gallery-item">
                            <img src="image/IMG_7737.jpg" alt="Cityscape at dusk" class="gallery-image">
                            <div class="gallery-description">
                                <p>整座城市都沉在藍色裡。</p>
                                <p>不是夜，也還不是黃昏，只是一種厚重的安靜——像某種情緒壓著沒說出口，像東京整齊得過頭的疲倦。</p>
                                <p>我站在高處，看著成千上萬棟建築擠在一起，像沉默的群體，每棟樓都有自己的故事，卻彼此無聲。就在那樣幾乎要吞沒一切的灰藍裡，天邊忽然裂開一道光。</p>
                                <p>細，斜，安靜地落下。</p>
                                <p>它沒有強烈地照亮什麼，但它在。就只是這樣在，就足以讓整個景色多了重量。那不是哪種可以立即翻轉情勢的光，也不是耀眼的希望宣言，它更像一種提醒——提醒你「還有什麼正在慢慢來」，提醒你「還沒結束」。</p>
                                <p>我沒有感到興奮，只有一點點平靜。</p>
                                <p>就像一個很久沒說話的人，突然點了點頭。</p>
                                <p>那一道光，沒有改變城市，但改變了我看這城市的方式。</p>
                            </div>
                        </div>

                        <div class="gallery-item">
                            <img src="image/IMG_7734.jpg" alt="City view through window" class="gallery-image">
                            <div class="gallery-description">
                                <p>我們總在框架裡看世界。窗戶、螢幕、或是自己的成見。</p>
                                <p>玻璃隔開了風和噪音，但也隔開了真實的溫度。我就在這裡，看著底下的燈火一盞盞亮起，像無數個清醒的夢。</p>
                                <p>每一扇窗裡都有一個故事，而我只是另一個窗戶裡的觀察者。我們很近，又很遠。</p>
                            </div>
                        </div>

                        <div class="gallery-item">
                            <img src="image/IMG_7829.jpg" alt="Panning shot of a yellow car" class="gallery-image">
                            <div class="gallery-description">
                                <p>為了拍下這個瞬間，我必須跟著它移動。</p>
                                <p>世界在鏡頭裡高速刷過，背景糊成一片流動的色彩。這就是「追焦」(Panning)——你必須放棄穩定的背景，才能捕捉到清晰的主體。</p>
                                <p>有時候，專注就是這樣：不是讓世界停下，而是讓自己跟上它的速度，然後在混亂中，找到唯一清晰的那一個點。</p>
                            </div>
                        </div>

                        <div class="gallery-item">
                            <img src="image/IMG_7862.jpg" alt="Path through foliage" class="gallery-image">
                            <div class="gallery-description">
                                <p>光線總在最深的地方才顯得珍貴。</p>
                                <p>葉子層層疊疊，幾乎擋住了所有去路，它們在陰影中呈現出一種深沉的、近乎墨綠色的靜默。</p>
                                <p>但你總能看見遠處那一點點溫暖的光源，它微弱，卻足以照亮眼前這根樹枝的輪廓。你不必走向光，光會自己找到縫隙，透進來。</p>
                            </div>
                        </div>

                    </div>
                `;
                appendOutput(output);
                break;
            
            case 'contact':
                output = `
                    <p><strong>Email:</strong> <a href="mailto:950725bopei@gmail.com">950725bopei@gmail.com</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/BoPei950725" target="_blank">github.com/BoPei950725</a></p>
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