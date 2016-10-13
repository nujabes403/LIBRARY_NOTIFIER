//requires
var request = require('request');
var cheerio = require('cheerio');

// Models
window.Libraries = require('./models.js').GetLibraries();

// Index
window.SelectLibrary = SelectLibrary;
window.SwitchToggle = SwitchToggle;
window.selected_lib = Libraries[5].link;
window.IsSwitchOn = false;
window.seat_nums = [];
window.current_seat_idx = 0;
window.SelectSeatNum = SelectSeatNum;
window.DeselectSeatNum = DeselectSeatNum;
// Functions
function SwitchToggle() {
        window.IsSwitchOn = !window.IsSwitchOn;
        if(window.IsSwitchOn) {
            window.worker = setInterval(function(){
                GetSeatState();
                console.log("WORK");
            }, 10000);
        } else if(!window.IsSwitchOn) {
            clearInterval(window.worker);
        }
    }
function SelectSeatNum() {
    var input_node = document.getElementById('seat_num_input');
    if(input_node.value < 0 || input_node.value > 400 || input_node.value == undefined) {
        alert("좌석번호를 올바르게 입력해주세요.");
        return;
    }
    var current_nums_node = document.getElementById('current_nums');
    var listEl = document.createElement("li");
    listEl.innerHTML = input_node.value;
    current_nums_node.appendChild(listEl);
    window.seat_nums.push(input_node.value);
}
function DeselectSeatNum() {
    var current_nums_node = document.getElementById('current_nums');
    current_nums_node.innerHTML = '';
    window.current_seat_idx = 0;
    window.seat_nums = [];
}
function SelectLibrary(lib_link) {
    window.selected_lib = lib_link;
}
function GetSeatState() {
    request(window.selected_lib, function(error, response, body) {
        if(error) {
            console.log("Error: " + error);
        }
        window.$ = cheerio.load(body);
        while(1) {
            if(window.current_seat_idx > window.seat_nums.length - 1) break;
            var current_color = current_color || $('div#Layer' + window.seat_nums[window.current_seat_idx] + ' tr td').attr('bgcolor');
                if(current_color == 'gray') {
                    console.log("The seat : " + window.seat_nums[window.current_seat_idx] + " is available.");
                } else if(current_color == 'red') {
                    console.log("The seat : " + window.seat_nums[window.current_seat_idx] + " is not available.");
                }
            window.current_seat_idx++;
        }
        window.current_seat_idx = 0;
    });
}
