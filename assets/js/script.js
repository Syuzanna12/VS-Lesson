var card = document.querySelectorAll('.card');

var card_button = document.querySelectorAll('.card button');

var card_img = document.querySelectorAll('.card img');

var card_p = document.querySelectorAll('.card p');

card_button[0].addEventListener('click',()=>{
	card[0].style='transform: rotateY(180deg);transition-duration: 0.8s;padding: 20px';
	card_button[0].style='display: none';
	card_p[0].style='display: none;';
	card_img[0].style='display: none';
	card[0].innerHTML=`<div  style="transform: rotateY(180deg);font-family: 'Handlee', cursive;text-align:justify;font-size: 24px;line-height: 25px;display: flex; flex-direction: column; gap: 20px;"><p>Front-end դասընթացները տևում են 5 ամիս։ Մենք միասին սովորելու ենք</p>
<ul style="list-style:none; display:flex; flex-direction: column; gap: 20px;">
	<li>✅HTML, CSS, BOOTSTRAP</li>
    <li>✅ JS, OOP</li>
    <li>✅React JS</li>
</ul>
<p>Իսկ արժեքը ամսեկան 25.000 դրամ։ Դասընթացը ներառում է ևս 2 ամիս անվճար պրակտիկայի հնարավորություն, ավարտին տրվում է սերտեֆիկատ, իսկ լավագույններին նաև աշխատանք։ Դարձիր Front-end ծրագրավորող</p></div>`;

})


card_button[1].addEventListener('click',()=>{
	card[1].style='transform: rotateY(180deg);transition-duration: 0.8s;padding: 20px';
	card_button[1].style='display: none';
	card_p[1].style='display: none;';
	card_img[1].style='display: none';
	card[1].innerHTML=`<div  style="transform: rotateY(180deg);text-align:justify;font-size: 24px;line-height: 25px;display: flex; flex-direction: column; gap: 20px;"><p>Graphic design-ի դասընթացները տևում են 3 ամիս։ Մենք միասին սովորելու ենք՝</p>
<ul style="list-style:none; display:flex; flex-direction: column; gap: 20px;">
	<li>✅Adobe Illustrator</li>
    <li>✅Adobe Photoshop</li>
</ul>
<p>Adobe ֆիրմայի արտադրության այս հրաշք ծրագրերը կօգնեն ձեզ ստանալ ավելին։ Իսկ արժեքը կազմում է ամսեկան 30․000 դրամ։ Դասընթացը ներառում է նաև 2 ամիս անվճար պրակտիկայի հնարավորություն, ավարտին տրվում է սերտեֆիկատ, իսկ լավագույններին նաև աշխատանք։ Դարձիր Graphic designer:</p></div>`;

})

card_button[2].addEventListener('click',()=>{
	card[2].style='transform: rotateY(180deg);transition-duration: 0.8s;padding: 20px';
	card_button[2].style='display: none';
	card_p[2].style='display: none;';
	card_img[2].style='display: none';
	card[2].innerHTML=`<div  style="transform: rotateY(180deg);text-align:justify;font-size: 24px;line-height: 25px;display: flex; flex-direction: column; gap: 20px;"><p>Back-end ծրագրավորման դասընթացը տևում է 6 ամիս։ Մենք միասին սովորելու ենք</p>
<ul style="list-style:none; display:flex; flex-direction: column; gap: 20px;">
	<li>✅C#, OOP</li>
    <li>✅.Net</li>
    <li>✅SQL</li>
</ul>
<p>Իսկ արժեքը ամսեկան 35.000 դրամ։ Դասընթացը ներառում է ևս 2 ամիս անվճար պրակտիկայի հնարավորություն , ավարտին տրվում է սերտեֆիկատ, իսկ լավագույններին նաև աշխատանք։ Դարձիր Back-end ծրագրավորող։</p></div>`;

})

card_button[3].addEventListener('click',()=>{
	card[3].style='transform: rotateY(180deg);transition-duration: 0.8s;padding: 20px';
	card_button[3].style='display: none';
	card_p[3].style='display: none;';
	card_img[3].style='display: none';
	card[3].innerHTML=`<div  style="transform: rotateY(180deg);text-align:justify;font-size: 24px;line-height: 25px;display: flex; flex-direction: column; gap: 20px;"><p>SMM-ի դասընթացները տևում են 1.5 ամիս։ Մենք միասին սովորելու ենք ինչպես վարել</p>
<ul style="list-style:none; display:flex; flex-direction: column; gap: 20px;">
	<li>✅Facebook</li>
    <li>✅Instagram</li>
    <li>✅Tik-Tok</li>
</ul>
<p>Իսկ արժեքը ամսեկան 35.000 դրամ։ Դասընթացը ներառում է ևս 2 ամիս անվճար պրակտիկայի հնարավորություն , ավարտին տրվում է սերտեֆիկատ, իսկ լավագույններին նաև աշխատանք։ Դարձիր Back-end ծրագրավորող։</p></div>`;

})

card_button[4].addEventListener('click',()=>{
	card[4].style='transform: rotateY(180deg);transition-duration: 0.8s;padding: 20px';
	card_button[4].style='display: none';
	card_p[4].style='display: none;';
	card_img[4].style='display: none';
	card[4].innerHTML=`<div  style="transform: rotateY(180deg);text-align:justify;font-size: 24px;line-height: 30px;display: flex; flex-direction: column; gap: 20px;"><p>SMM-ի դասընթացները տևում են 1.5 ամիս։ Մենք միասին սովորելու ենք ինչպես վարել</p>
<ul style="list-style:none; display:flex; flex-direction: column; gap: 20px;font-size: 18px;">
	<li>✅ 3-5րդ դասարան - 5000 դրամ</li>
	<li>✅ 6-10րդ դասարան - 8000 դրամ</li>
    <li>✅ 11-12րդ դասարան - 10,000 դրամ</li>
    <li>✅Դիմորդ - 18․000 դրամ</li>
    <li>✅Մասնագիտական անգլերեն - 8000 դրամ</li>
</ul>
<p>Միացիր մեզ և սովորիր անգլերեն։</p></div>`;

})


card_button[5].addEventListener('click',()=>{
	card[5].style='transform: rotateY(180deg);transition-duration: 0.8s;padding: 20px';
	card_button[5].style='display: none';
	card_p[5].style='display: none;';
	card_img[5].style='display: none';
	card[5].innerHTML=`<div  style="transform: rotateY(180deg);text-align:justify;font-size: 24px;line-height: 25px;display: flex; flex-direction: column; gap: 20px;"><p>Մաթեմատիկան յուրահատուկ աշխարհ է, որը զարգացնում է մտածողություն։ Եթե դու ցանկանում ես սովորել և վարժ տիրապետել այս առարկային, ապա շտապիր միանալ մեզ։ Սովորելով մաթեմատիկա դու ոչ միայն կզարգացնես քո մաթեմատիկական գիտելիքները, այլև կունենաս լավ տրամադրություն և ճիշտ մտածողություն, կդառնաս ավելի համբերատար և ուշիմ։Մենք սովորեցնում ենք մաթեմատիկա 5-12րդ դասարանցիներին, ինչպես նաև 1ին կուրսի ուսանողներին։ 
Արժեքները ստորև</p>
<ul style="list-style:none; display:flex; flex-direction: column; gap: 20px; font-size: 22px">
	<li>✅5-9րդ դասարան - 8000դրամ</li>
	<li>✅9-12րդ դասարան - 10.000 դրամ</li>
	<li>✅Դիմորդ - 15.000 դրամ</li>
	<li>✅Ուսանող - 15.000 դրամ</li>
</ul>
</div>`;

})