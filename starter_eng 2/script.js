let grid = [];
let timer = 0;
let timePassed = 0;
let gridSize = 5;
let gameDifficulty = 'easy';
let currentLevel = [];
let trackState = [];
let leaderboard = [];
window.onload = loadLeaderboard;

const easy = [
    [
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }, { type: 3, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 180 }],
        [{ type: 1, rotation: 0 }, { type: 3, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 180 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }, { type: 2, rotation: 90 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ]
]

const hard = [
    [
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 3, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }],
        [{ type: 2, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 90 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }],
        [{ type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 270 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ],
    [
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 1, rotation: 90 }, { type: 1, rotation: 90 }, { type: 0, rotation: 0 }, { type: 2, rotation: 90 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 2, rotation: 0 }, { type: 0, rotation: 0 }, { type: 3, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 2, rotation: 180 }, { type: 0, rotation: 0 }, { type: 1, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }],
        [{ type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }, { type: 0, rotation: 0 }]
    ]
];

const imageMap = {
    0: 'pics/tiles/empty.png',
    1: 'pics/tiles/bridge.png',
    2: 'pics/tiles/mountain.png',
    3: 'pics/tiles/oasis.png',
    //empty
    4: 'pics/tiles/curve_rail.png',
    5: 'pics/tiles/straight_rail.png',
    //bridge
    6: 'pics/tiles/bridge_rail.png',
    //mountain
    7: 'pics/tiles/mountain_rail.png'
};

const placementRules = {
    0: ['curve', 'straight'],
    1: ['bridge'],
    2: ['mountain'],
    3: []
};

function start() {
    const playerName = document.querySelector('#playersName').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    clearInterval(timer);
    clearTimeout(timer);
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    gameDifficulty = document.querySelector('#difficulty').value;
    document.querySelector('#playersNameDisplay').innerHTML = playerName;
    document.querySelector('#mainMenu').style.display = 'none';
    document.querySelector('#game').style.display = 'block';
    if (gameDifficulty === 'hard') {
        gridSize = 7;
        createGrid(hard[randomNumber - 1]);
        currentLevel = hard[randomNumber - 1];
    } else {
        createGrid(easy[randomNumber - 1]);
        currentLevel = easy[randomNumber - 1];
    }

    trackState = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => ({
            type: null,
            rotation: 0,
            visited: false
        }))
    );
    startTimer();
    setupPalette();
}

function setupPalette() {
    const draggableItems = document.querySelectorAll('.draggable');
    draggableItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
    });
}

function handleDragStart(event) {
    event.dataTransfer.setData('type', event.target.dataset.type);
    event.dataTransfer.setData('image', event.target.src);
}

function createGrid(matrix) {
    const gridContainer = document.querySelector('#gridContainer');
    gridContainer.innerHTML = '';
    grid = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            if (matrix[i][j]['type'] >= 0) {
                cell.style.backgroundImage = `url(${imageMap[matrix[i][j]['type']]})`;
                cell.style.backgroundSize = 'cover';
                cell.style.backgroundPosition = 'center';
                cell.dataset.row = i;
                cell.dataset.col = j;
                if (matrix[i][j]['rotation'] !== undefined) {
                    cell.style.transform = `rotate(${matrix[i][j]['rotation']}deg)`;
                }
            }
            cell.addEventListener('dragover', handleDragOver);
            cell.addEventListener('drop', handleDrop);
            cell.addEventListener('click', () => { rotateCell(i, j, cell) });

            cell.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                removeTile(i, j, cell);
            });

            gridContainer.appendChild(cell);
            row.push(cell);
        }
        grid.push(row);
        gridContainer.style.display = 'grid';
        gridContainer.style.gridTemplateColumns = `repeat(${matrix[0].length}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${matrix.length}, 1fr)`;
    }
}

function removeTile(row, col, cell) {
    const currentState = trackState[row][col];

    if (currentState.type === 'curve' || currentState.type === 'straight') {
        cell.style.backgroundImage = `url(${imageMap[0]})`;
        cell.style.transform = 'rotate(0deg)';

        trackState[row][col] = {
            type: null,
            rotation: 0,
            visited: false
        };

    } else if (currentState.type === 'mountain') {
        cell.style.backgroundImage = `url(${imageMap[2]})`;

        trackState[row][col] = {
            type: 2,
            rotation: 0,
            visited: false
        };

    } else if (currentState.type === 'bridge') {
        cell.style.backgroundImage = `url(${imageMap[1]})`;

        trackState[row][col] = {
            type: 1,
            rotation: 0,
            visited: false
        };
    }
}

function rotateCell(row, col, cell) {
    const currentState = trackState[row][col];

    if (currentState.type === 'curve' || currentState.type === 'straight') {

        if (currentState.type === 'straight') {
            currentState.rotation = (currentState.rotation === 0) ? 90 : 0;
        } else if (currentState.type === 'curve') {
            currentState.rotation = (currentState.rotation + 90) % 360;
        }

        cell.style.transform = `rotate(${currentState.rotation}deg)`;
    }
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    const type = event.dataTransfer.getData('type');
    const image = event.dataTransfer.getData('image');

    const terrainType = currentLevel[row][col]['type'];

    if (!placementRules[terrainType] || !placementRules[terrainType].includes(type)) {
        return;
    }

    event.target.style.backgroundImage = `url(${image})`;
    event.target.style.backgroundSize = 'cover';

    trackState[row][col] = {
        type: type,
        rotation: 0,
        visited: true
    };

}


function startTimer() {
    timer = 0;
    timePassed = 0;
    timer = setInterval(() => {
        timePassed += 1;
        document.querySelector('#timerDisplay').innerText = timePassed;
    }, 1000);
}

function showRules() {
    alert('1) Each cell has two exit points, and the train can enter each neighboring cell from the correct direction.\n2) Every cell that needs to be touched is touched.\n3) Every cell where no track can be placed remains empty.\n4) Right click on a placed rail to remove it.\n5) Click on a placed rail to rotate it.');
}

function validate() {
    const playerName = document.querySelector('#playersName').value;
    const timePassed = parseInt(document.querySelector('#timerDisplay').innerText);
    const difficulty = gameDifficulty;

    alert(`Player: ${playerName}\nTime: ${timePassed} seconds`);

    const existingEntry = leaderboard.find(entry => entry.name === playerName && entry.difficulty === difficulty);

    if (existingEntry) {
        if (timePassed < existingEntry.time) {
            existingEntry.time = timePassed;
        }
    } else {
        leaderboard.push({ name: playerName, time: parseInt(timePassed), difficulty: difficulty });
    }

    leaderboard.sort((a, b) => a.time - b.time);

    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    document.querySelector('#game').style.display = 'none';
    document.querySelector('#mainMenu').style.display = 'flex';

    displayLeaderboard();

    return true;
}

function loadLeaderboard() {
    const savedLeaderboard = localStorage.getItem('leaderboard');
    if (savedLeaderboard) {
        leaderboard = JSON.parse(savedLeaderboard);
    }
    displayLeaderboard();
}

function displayLeaderboard() {
    const leaderboardEasyContainer = document.querySelector('#leaderboardeasy table');
    const leaderboardHardContainer = document.querySelector('#leaderboardhard table');

    leaderboardEasyContainer.innerHTML = `
        <tr>
        </tr>
    `;
    leaderboardHardContainer.innerHTML = `
        <tr>
        </tr>
    `;

    leaderboard.forEach((entry) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.time} seconds</td>
        `;
        if (entry.difficulty === 'easy') {
            leaderboardEasyContainer.appendChild(row);
        } else if (entry.difficulty === 'hard') {
            leaderboardHardContainer.appendChild(row);
        }
    });
}