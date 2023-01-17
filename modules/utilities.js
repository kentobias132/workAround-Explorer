const formatNumber = (number) => {
    let nf = new Intl.NumberFormat('en-US');
    return nf.format(number);
  }
  
  export default formatNumber;