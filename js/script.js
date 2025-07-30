
 document.addEventListener("DOMContentLoaded", function () {
// code for index animations
    const obj = document.querySelectorAll('#imgbld');
    const obj1 = document.querySelectorAll('.m-st');
    const obj2 = document.querySelectorAll('#h-tg');
    const obj3 = document.querySelectorAll('.p-tg');
    const obj4 = document.querySelectorAll('#h-tg1');
    const obj5 = document.querySelectorAll('.pg-02');
    const obj6 = document.querySelectorAll('#pg-04-tp-h2');
    const obj7 = document.querySelectorAll('#pg-04-tp-h3');
    const obj8 = document.querySelectorAll('.bx');
    const obj9 = document.querySelectorAll('.n-card');
    const obj10 = document.querySelectorAll('#v-hm');
    const obj11 = document.querySelectorAll('.v-cards');
    const obj12 = document.querySelectorAll('.v-container');
    const obj13 = document.querySelectorAll('.upper-sec2-main');
    const ob = new IntersectionObserver(entries => {
        entries.forEach(entries => {
            if (entries.isIntersecting) {
                entries.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });
    obj.forEach(Image => ob.observe(Image));
    obj1.forEach(text => ob.observe(text));
    obj2.forEach(text => ob.observe(text));
    obj3.forEach(text => ob.observe(text));
    obj4.forEach(text => ob.observe(text));
    obj5.forEach(text => ob.observe(text));
    obj6.forEach(text => ob.observe(text));
    obj7.forEach(text => ob.observe(text));
    obj8.forEach(text => ob.observe(text));
    obj9.forEach(text => ob.observe(text));
    obj10.forEach(text => ob.observe(text));
    obj11.forEach(text => ob.observe(text));
    obj12.forEach(text => ob.observe(text));
    obj13.forEach(text => ob.observe(text));


    const Mobj = document.querySelectorAll('#ov-h2');
    const Mobj1 = document.querySelectorAll('#sub-head1');
    const Mobj2 = document.querySelectorAll('#h-tg');
    const Mobj3 = document.querySelectorAll('.p-tg');
    const Mobj4 = document.querySelectorAll('#h-tg1');
    const Mobj5 = document.querySelectorAll('.pg-02');
    const Mobj6 = document.querySelectorAll('#pg-04-tp-h2');
    const Mobj7 = document.querySelectorAll('#pg-04-tp-h3');
    const Mobj8 = document.querySelectorAll('.bx');
    const Mobj9 = document.querySelectorAll('.upper-sec2-main');

    const Mob = new IntersectionObserver(entries => {
        entries.forEach(entries => {
            if (entries.isIntersecting) {
                entries.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });
    Mobj.forEach(text => Mob.observe(text));
    Mobj1.forEach(text => Mob.observe(text));
    Mobj2.forEach(text => Mob.observe(text));
    Mobj3.forEach(text => Mob.observe(text));
    Mobj4.forEach(text => Mob.observe(text));
    Mobj5.forEach(text => Mob.observe(text));
    Mobj6.forEach(text => Mob.observe(text));
    Mobj7.forEach(text => Mob.observe(text));
    Mobj8.forEach(text => Mob.observe(text));
    Mobj9.forEach(text => Mob.observe(text));

}  


)