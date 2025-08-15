    const backdrop = document.getElementById('backdrop');
    function toggleSidebar(){
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
      backdrop.classList.toggle('show');
    }
    function closeSidebar(){
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.remove('active');
      backdrop.classList.remove('show');
    }

    function resetKeuangan() {
      if (currentRole !== "admin") {
        alert("Hanya admin yang dapat mereset kas dan pengeluaran.");
        return;
      }
      if (confirm("Yakin ingin mereset semua data kas dan pengeluaran?")) {
        anggota.forEach(a => {
          kas[a.nama] = { saldo: 0, bulanan: Array(12).fill(false) };
        });
        pengeluaran = [];
        localStorage.setItem("kas", JSON.stringify(kas));
        localStorage.setItem("pengeluaran", JSON.stringify(pengeluaran));
        tampilkanKeuangan();
      }
    }

function buatAkun() {
  if (currentRole !== "admin") {
    document.getElementById("buat-akun-msg").textContent = "Hanya admin yang bisa membuat akun.";
    return;
  }
  const userBaru = document.getElementById("new-user").value.trim();
  const passBaru = document.getElementById("new-pass").value.trim();
  const roleBaru = document.getElementById("new-role").value;

  if (!userBaru || !passBaru) {
    document.getElementById("buat-akun-msg").textContent = "Username dan password wajib diisi.";
    return;
  }
  if (akun[userBaru]) {
    document.getElementById("buat-akun-msg").textContent = "Username sudah ada.";
    return;
  }

  akun[userBaru] = { password: passBaru, role: roleBaru };
  localStorage.setItem("akun", JSON.stringify(akun));
  document.getElementById("buat-akun-msg").textContent = `Akun '${userBaru}' berhasil dibuat dengan role '${roleBaru}'.`;
  
  document.getElementById("new-user").value = "";
  document.getElementById("new-pass").value = "";
}
    
let akun = JSON.parse(localStorage.getItem("akun")) || {
  admin: { password: "dkv28administrator", role: "admin" },
  guru: { password: "gurupass", role: "guru" },
  bendahara: { password: "kaspass", role: "bendahara" },
  sekretaris: { password: "sekretaris123", role: "sekretaris" }
};

    const bulan = ["Juli", "Agustus", "September", "Oktober", "November", "Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"];

    const defaultAnggota = [
      { nama: "Astafan Difari Pratama", jeniskelamin: "lakilaki", jurusan: "dkv" },    
      { nama: "Aurel Nathania", jeniskelamin: "perempuan", jurusan: "dkv" },     
      { nama: "Challysta listiani", jeniskelamin: "perempuan", jurusan: "dkv" },        
      { nama: "Dini Triazititi", jeniskelamin: "perempuan", jurusan: "dkv" },              
      { nama: "Niken Ayu", jeniskelamin: "perempuan", jurusan: "dkv" },    
      { nama: "Rifka Madinah Afni", jeniskelamin: "perempuan", jurusan: "dkv" },   
      { nama: "Rifqa Lydia Salsabila", jeniskelamin: "perempuan", jurusan: "dkv" },    
      { nama: "Wulandari Cahaya Ramadani", jeniskelamin: "perempuan", jurusan: "dkv" },   
      { nama: "Aurel Friscilla", jeniskelamin: "perempuan", jurusan: "dkv" },    
      { nama: "Ayra Putri", jeniskelamin: "perempuan", jurusan: "dkv" },   
      { nama: "Callisa Putri Cantika", jeniskelamin: "perempuan", jurusan: "dkv" },    
      { nama: "Maria Wening Gracia", jeniskelamin: "perempuan", jurusan: "dkv" },
      { nama: "Violita Meilika Susanto", jeniskelamin: "perempuan", jurusan: "dkv" },    
      { nama: "Rayi Syifa Manza", jeniskelamin: "perempuan", jurusan: "dkv" },   
      { nama: "Indriyani Nurwandini", jeniskelamin: "perempuan", jurusan: "dkv" },    
      { nama: "Chelvin Alvaro Gavriel", jeniskelamin: "lakilaki", jurusan: "dkv" },
      { nama: "Fajit Taharat Okawahyu", jeniskelamin: "lakilaki", jurusan: "dkv" },    
      { nama: "Fariz Septyan Ramadhan L", jeniskelamin: "lakilaki", jurusan: "dkv" },     
      { nama: "Izza Tanzihul Fikri", jeniskelamin: "lakilaki", jurusan: "dkv" },         
      { nama: "Izzan putra rasydan", jeniskelamin: "lakilaki", jurusan: "dkv" },   
      { nama: "Khaerudin", jeniskelamin: "lakilaki", jurusan: "dkv" },        
      { nama: "Mahar syahreza", jeniskelamin: "lakilaki", jurusan: "dkv" },               
      { nama: "Muhammad ilham", jeniskelamin: "lakilaki", jurusan: "dkv" },  
      { nama: "Muhammad vicky hanan", jeniskelamin: "lakilaki", jurusan: "dkv" },     
      { nama: "Raka firdaus", jeniskelamin: "lakilaki", jurusan: "dkv" },  
      { nama: "Rassya noor putera muchtar", jeniskelamin: "lakilaki", jurusan: "dkv" },        
      { nama: "Reizky rafa wardana", jeniskelamin: "lakilaki", jurusan: "dkv" },    
      { nama: "Reza herwanto", jeniskelamin: "lakilaki", jurusan: "dkv" },  
      { nama: "Yobel kaleb karunia", jeniskelamin: "lakilaki", jurusan: "dkv" },        
      { nama: "Zanuar nur arifin", jeniskelamin: "lakilaki", jurusan: "dkv" },   
      { nama: "Alfar fairuz ali", jeniskelamin: "lakilaki", jurusan: "dkv" },            
      { nama: "Alfian faturrahman", jeniskelamin: "lakilaki", jurusan: "dkv" },                   
      { nama: "Ardan wiratama", jeniskelamin: "lakilaki", jurusan: "dkv" },         
      { nama: "Burhanuddin yusuf rizki", jeniskelamin: "lakilaki", jurusan: "dkv" },
      { nama: "Mahdifikri ferdian", jeniskelamin: "lakilaki", jurusan: "dkv" },         
      { nama: "Muhammad fathuraman al fatir", jeniskelamin: "lakilaki", jurusan: "dkv" },
      { nama: "Wahyu riyadi matondang", jeniskelamin: "lakilaki", jurusan: "dkv" }
    ];

    let anggota = JSON.parse(localStorage.getItem("anggotadkv28")) || defaultAnggota;
    let kas = JSON.parse(localStorage.getItem("kas")) || {};
    let pengeluaran = JSON.parse(localStorage.getItem("pengeluaran")) || [];
    let kelompokTerbentuk = [];

    anggota.forEach(a => {
      if (!kas[a.nama]) kas[a.nama] = { saldo: 0, bulanan: Array(12).fill(false) };
    });
    localStorage.setItem("kas", JSON.stringify(kas));
    localStorage.setItem("anggota", JSON.stringify(anggota));

    let currentRole = null;

function tampilkanAnggota() {
  const listDKV = document.getElementById("anggota-dkv")
  listDKV.innerHTML = ""

  anggota.sort((a, b) => a.nama.localeCompare(b.nama, "id", { sensitivity: "base" }));

  anggota.forEach(a => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = a.nama;
    if (a.jurusan === "dkv") listDKV.appendChild(li)
  });

  document.getElementById('jumlah-anggota').textContent = anggota.length;
}

function bentukKelompok() {
  const jurusanDipilih = Array.from(document.querySelectorAll(".filter-jurusan:checked")).map(cb => cb.value);
  const minimalPerempuan = parseInt(document.getElementById("minimal-perempuan").value);
  const jumlahKelompok = parseInt(document.getElementById("jumlah-kelompok").value);
  const out = document.getElementById("hasil-kelompok");

  let kandidat = anggota.filter(a => jurusanDipilih.includes(a.jurusan));
  if (kandidat.length < jumlahKelompok) {
    out.innerHTML = `<div class="alert alert-warning">Jumlah anggota tidak cukup untuk ${jumlahKelompok} kelompok.</div>`;
    return;
  }

  let kelompok = [];
  let percobaan = 0;
  const maksPercobaan = 10000;
  let berhasil = false;

  while (percobaan < maksPercobaan) {
    kelompok = Array.from({ length: jumlahKelompok }, () => []);
    let acak = [...kandidat].sort(() => Math.random() - 0.5);
    acak.forEach((a, i) => kelompok[i % jumlahKelompok].push(a));

    if (minimalPerempuan === 0 || kelompok.every(k => k.filter(a => a.jeniskelamin === "perempuan").length >= minimalPerempuan)) {
      berhasil = true;
      break;
    }
    percobaan++;
  }

  if (!berhasil) {
    out.innerHTML = `<div class="alert alert-danger">Tidak dapat membentuk kelompok dengan minimal ${minimalPerempuan} perempuan per kelompok. Silahkan kurangi jumlah kelompok.</div>`;
    return;
  }

  kelompokTerbentuk = kelompok; 

  let html = "";
  kelompok.forEach((k, i) => {
    html += `<h5 class="mt-4">Kelompok ${i + 1}</h5><ul class="list-group">` + k.map(a => `<li class="list-group-item">${a.nama}</li>`).join("") + "</ul>";
  });
  out.innerHTML = html;
}

    function exportKelompok() {
      if (!kelompokTerbentuk.length) return;
      let text = "Data Kelompok:\n\n";
      kelompokTerbentuk.forEach((group, i) => {
        text += `Kelompok ${i + 1}:\n` + group.map(a => `- ${a.nama}`).join("\n") + "\n\n";
      });
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "kelompok-x-dkv.txt");
    }

function loginAdmin() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  if (akun[user] && akun[user].password === pass) {
    currentRole = akun[user].role;
    localStorage.setItem("role", currentRole);
    document.getElementById("login-msg").textContent = `Login berhasil sebagai ${user} (Role: ${currentRole})`;
    tampilkanKeuangan();
    
    if (currentRole === "admin") {
      document.getElementById("admin-panel").classList.remove("d-none");
    }
  } else {
    document.getElementById("login-msg").textContent = "Login gagal.";
  }
}
currentRole = localStorage.getItem("role");

    function navHandler() {
      const sections = document.querySelectorAll("main section");
      document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const target = link.getAttribute("href").replace("#", "");
          sections.forEach(sec => sec.classList.add("d-none"));
          const el = document.getElementById(target);
          el.classList.remove("d-none");
          el.classList.remove('fade-in');
          void el.offsetWidth;
          el.classList.add('fade-in');
          closeSidebar();
if (currentRole === "admin") {
  document.getElementById("admin-panel").classList.remove("d-none");
}          
        });
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
    tampilkanAnggota();
    navHandler();