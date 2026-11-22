const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const brakeItems=[
 ["Első féktárcsa","Első tengely","PR-kód és méret szerint azonosítandó","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["Első fékbetétkészlet","Első tengely","Féknyereg- és tárcsaváltozat szerint","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["Első féknyereg","Bal / jobb","Gyártó, dugattyúméret és tartókonzol szerint","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["Hátsó féktárcsa","Hátsó tengely","Tömör vagy hűtött kivitel; hajtás és PR-kód szerint","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["Hátsó fékbetétkészlet","Hátsó tengely","Féknyereg-kivitel szerint","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["Hátsó féknyereg","Bal / jobb","Kézifékmechanika és féknyereg-változat szerint","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["Fékcsövek és flexibilis tömlők","Hidraulika","Tengely, oldal és fékrendszer szerint","Cikkszám: VIN/PR ellenőrzés szükséges"],
 ["ABS/ESP érzékelők és egységek","Elektronika","Vezérlő- és érzékelőváltozat szerint","Cikkszám: VIN/PR ellenőrzés szükséges"]
];
const codes=[
 ["P0299","Töltőnyomás-szabályozás: alacsony töltőnyomás","A tényleges töltőnyomás alacsonyabb az elvártnál."],
 ["P0234","Töltőnyomás-szabályozás: túltöltés","A töltőnyomás meghaladja az elvárt értéket."],
 ["P0101","Légtömegmérő – tartomány/teljesítmény","A légtömegmérő jele nem a várt tartományban van."],
 ["P0401","EGR – elégtelen áramlás","Az EGR-rendszer áramlása az elvártnál kisebb."]
];
function renderBrakes(q=""){
 $("#brakeList").innerHTML=brakeItems.filter(x=>x.join(" ").toLowerCase().includes(q.toLowerCase())).map(x=>`<article class="item"><div class="item-icon">◉</div><div><b>${x[0]}</b><small>${x[1]} · ${x[2]}</small><small>${x[3]}</small></div><span class="tag">Ellenőrzendő</span></article>`).join("")||'<p class="note">Nincs találat.</p>';
}
function renderCodes(q=""){
 $("#codeList").innerHTML=codes.filter(x=>x.join(" ").toLowerCase().includes(q.toLowerCase())).map(x=>`<article class="item"><div class="item-icon">⌕</div><div><b>${x[0]} · ${x[1]}</b><small>${x[2]}</small></div></article>`).join("")||'<p class="note">Nincs találat.</p>';
}
function showTab(name){$$(".view").forEach(v=>v.classList.toggle("active",v.id===name));$$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===name));window.scrollTo({top:0,behavior:"smooth"});}
$$(".tab").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.go)));
$("#brakeSearch").addEventListener("input",e=>renderBrakes(e.target.value));
$("#codeSearch").addEventListener("input",e=>renderCodes(e.target.value));
const vehicleKeys=["engine","engineCode","year","body","drive","pr"];
function loadVehicle(){vehicleKeys.forEach(k=>{const v=localStorage.getItem("p3bg_"+k);if(v!==null)$("#"+k).value=v;});}
$("#saveVehicle").addEventListener("click",()=>{vehicleKeys.forEach(k=>localStorage.setItem("p3bg_"+k,$("#"+k).value));$("#saveNote").textContent="Járműprofil mentve ezen az eszközön.";});
renderBrakes();renderCodes();loadVehicle();
const net=()=>$("#network").textContent=navigator.onLine?"Online kapcsolat":"Offline mód";
window.addEventListener("online",net);window.addEventListener("offline",net);net();
let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").classList.remove("hidden");});
$("#installBtn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").classList.add("hidden");});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
