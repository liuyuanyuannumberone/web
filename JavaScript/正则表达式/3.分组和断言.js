/**
 * 
 */
{
    let date = 'lastDate:2029-09-02 2011-11-02';
    const t = date.match(/(\d{4})[-](\d{2})[-](\d{2})/);
    const m = date.match(/(?<year>\d{4})[-](?<month>\d{2})[-](?<day>\d{2})/);
    const { year, month, day } = m.groups;
    // console.log(year, month, day); //2029 09 02
    //  console.log(t[0]); //2029-09-02
}

//先行断言 (?=)  后行断言 (?<=)
 console.log('helloworld'.match(/hello(?=world)/)); //遇到hello的时候去判断是不是等于world
 console.log('helloworld'.match(/(?<=hello)world/)); //遇到world的时候去判断前边是不是等于hello