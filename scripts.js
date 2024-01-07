        let memory = 0;
        let history = [];
        let variables = { x: 0, y: 0, z: 0 };

        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function deleteLastChar() {
            const currentValue = document.getElementById('display').value;
            document.getElementById('display').value = currentValue.slice(0, -1);
        }

        function calculate() {
            try {
                const result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
                addToHistory(result);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }

        function toggleSign() {
            const currentValue = parseFloat(document.getElementById('display').value);
            document.getElementById('display').value = -currentValue;
        }

    function calculateExponent() {
      var base = parseFloat(document.getElementById("base").value);
      var exponent = parseFloat(document.getElementById("exponent").value);
      var resultElement = document.getElementById("result");

      var result = Math.pow(base, exponent);
      resultElement.innerHTML = `${base}<sup>${exponent}</sup> = ${result}`;
    }

        function setVariable(variable) {
            const currentValue = parseFloat(document.getElementById('display').value);
            variables[variable] = currentValue;
            clearDisplay();
        }

        function calculateLog() {
            const currentValue = parseFloat(document.getElementById('display').value);
            const result = Math.log(currentValue);
            document.getElementById('display').value = result;
            addToHistory(result);
        }
       
        function solveQuadratic() {
            var a = parseFloat(document.getElementById('a').value);
            var b = parseFloat(document.getElementById('b').value);
            var c = parseFloat(document.getElementById('c').value);

            var delta = Math.sqrt(b**2 - 4*a*c);

            var root1 = (-b + delta) / (2*a);
            var root2 = (-b - delta) / (2*a);

            document.getElementById('quadraticSolution1').innerText = 'Root 1: ' + root1;
            document.getElementById('quadraticSolution2').innerText = 'Root 2: ' + root2;
        }

        function evaluateQuadraticFunction() {
            var a = parseFloat(document.getElementById('a').value);
            var b = parseFloat(document.getElementById('b').value);
            var c = parseFloat(document.getElementById('c').value);
            var x = parseFloat(document.getElementById('functionX').value);

            var result = a * x**2 + b * x + c;

            document.getElementById('functionResult').innerText = 'f(' + x + ') = ' + result;
        }       
       
         function calculateSquared0() {
            const currentValue = parseFloat(document.getElementById('display').value);
            const result = Math.pow(currentValue, 0);
            document.getElementById('display').value = result;
            addToHistory(result);
        }      
        
         function calculateSquared1() {
            const currentValue = parseFloat(document.getElementById('display').value);
            const result = Math.pow(currentValue, 1);
            document.getElementById('display').value = result;
            addToHistory(result);
        }              
         function calculateSquared() {
            const currentValue = parseFloat(document.getElementById('display').value);
            const result = Math.pow(currentValue, 2);
            document.getElementById('display').value = result;
            addToHistory(result);
        }      

    function tampilkanForm() {
      var jenisBangun = document.getElementById("jenisBangun").value;
      var formPersegi = document.getElementById("formPersegi");
      var formLingkaran = document.getElementById("formLingkaran");
      var formBalok = document.getElementById("formBalok");
      var formTabung = document.getElementById("formTabung");
      var formBola = document.getElementById("formBola");      
      var formKerucut = document.getElementById("formKerucut");            

      formPersegi.style.display = jenisBangun === "persegi" ? "block" : "none";
      formLingkaran.style.display = jenisBangun === "lingkaran" ? "block" : "none";
      formBalok.style.display = jenisBangun === "balok" ? "block" : "none";
      formTabung.style.display = jenisBangun === "tabung" ? "block" : "none";
      formBola.style.display = jenisBangun === "bola" ? "block" : "none";      
      formKerucut.style.display = jenisBangun === "kerucut" ? "block" : "none";            
    }

    function hitung() {
      var jenisBangun = document.getElementById("jenisBangun").value;
      var hasil = document.getElementById("hasil");
      var hasilVolume = document.getElementById("hasilVolume");      

      if (jenisBangun === "persegi") {
        var sisi = parseFloat(document.getElementById("sisiPersegi").value);
        var luas = sisi * sisi;
        var keliling = 4 * sisi;
        hasil.innerHTML = `<p>Keliling ${jenisBangun}: ${keliling.toFixed(2)}</p>
                                  <p>Luas ${jenisBangun}: ${luas.toFixed(2)}</p>`;
      } else if (jenisBangun === "lingkaran") {
        var jariJari = parseFloat(document.getElementById("jariJariLingkaran").value);
        var luas = Math.PI * jariJari**2;
        var keliling = 2 * Math.PI * jariJari;
        hasil.innerHTML = `<p>Keliling ${jenisBangun}: ${keliling.toFixed(2)}</p>
                                  <p>Luas ${jenisBangun}: ${luas.toFixed(2)}</p>`;        
      } else if (jenisBangun === "balok") {
        var panjang = parseFloat(document.getElementById("panjangBalok").value);
        var lebar = parseFloat(document.getElementById("lebarBalok").value);
        var tinggi = parseFloat(document.getElementById("tinggiBalok").value);
        var volume = panjang * lebar * tinggi;
        var luas = 2*( panjang * lebar + lebar * tinggi + panjang * tinggi);
        hasil.innerHTML = `<p>Volume ${jenisBangun}: ${volume.toFixed(2)}</p>
                                  <p>Luas Permukaan ${jenisBangun}: ${luas.toFixed(2)}</p>`;
} 
        else if (jenisBangun === "tabung") {
        var jariJari = parseFloat(document.getElementById("jariJariTabung").value);
        var tinggiTabung = parseFloat(document.getElementById("tinggiTabung").value);
        var volume = Math.PI *jariJari**2* tinggiTabung;
        var luasSelimut = 2 * Math.PI * jariJari * tinggiTabung;
        var luasAlas = Math.PI *jariJari**2 ;
        var luasPermukaanTertutup = 2 * Math.PI * jariJari * (jariJari +tinggiTabung);
        hasil.innerHTML = `<p>Volume ${jenisBangun}: ${volume.toFixed(2)}</p>
                                  <p>Luas Selimut ${jenisBangun}: ${luasSelimut.toFixed(2)}</p>
                                  <p>Luas Alas ${jenisBangun}: ${luasAlas.toFixed(2)}</p>       
                                  <p>Luas Permukaan Tertutup ${jenisBangun}: ${luasPermukaanTertutup.toFixed(2)}</p>`;
      } 
        else if (jenisBangun === "bola") {
        var jariJariBola = parseFloat(document.getElementById("jariJariBola").value);
        var volume = (4/3) * Math.PI * jariJariBola**3;
        hasil.innerHTML = `Volume ${jenisBangun}: ${volume.toFixed(2)}`;
      }
        else if (jenisBangun === "kerucut") {
        var jarijariKerucut = parseFloat(document.getElementById("jarijariKerucut").value);
        var tinggiKerucut = parseFloat(document.getElementById("tinggiKerucut").value);
        var volume = (1/3) * Math.PI * Math.pow(jarijariKerucut, 2) * tinggiKerucut;
        var luas = Math.PI * jarijariKerucut * (jarijariKerucut + Math.sqrt(Math.pow(tinggiKerucut, 2) + Math.pow(jarijariKerucut, 2)));
        hasil.innerHTML = `<p>Volume ${jenisBangun}: ${volume.toFixed(2)}</p>
                                  <p>Luas Permukaan ${jenisBangun}: ${luas.toFixed(2)}</p>`;
            }            
        }

        function addToHistory(result) {
            history.push(result);
            updateHistoryList();
        }
        
        function updateHistoryList() {
            const historyList = document.getElementById('history-list');
            historyList.innerHTML = '';
            history.forEach((result, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `#${index + 1}: ${result}`;
                historyList.appendChild(listItem);
            });
        }
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const clockDisplay = document.getElementById('clock');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();             