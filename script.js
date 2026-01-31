const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("message").value;

  const now = new Date();
  const time = now.toLocaleString();

  result.innerHTML = `
    <p><strong>Current time :</strong> ${time}</p>
    <p><strong>Nama :</strong> ${name || "-"}</p>
    <p><strong>Tanggal Lahir :</strong> ${birthdate || "-"}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender ? gender.value : "-"}</p>
    <p><strong>Pesan :</strong> ${message || "-"}</p>
  `;

  form.reset();
});
