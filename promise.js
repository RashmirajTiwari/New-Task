
<script>
const PreMovie=async ()=>{


    const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        },1000);
    });
    const getColdDrink=new Promise((resolve,reject)=>resolve('coldDrinks'));
    const getButter=new Promise((resolve,reject)=>resolve('Butter'));

    let ticket=await promiseWifeBringingTicket;

    let [butter,coldDrink]=await Promise.all([getButter,getColdDrink]);
    console.log(butter,coldDrink)
    return ticket;
}
PreMovie().then((m)=>console.log(m));

</script>
