const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 将服务器放回的双重数组变为jsonArr
 */
const cardData = data => {
  let formatData = [];
  for(let i = 0; i<data.length;i++){
    formatData.push({
      title: data[i][1],
      time: data[i][7],
      img: data[i][3],
      onItemClick:'itemOnClick'
    });
  }
  return formatData;
}
/**
 * 在数组前面添加数据
 */
const unshiftCardData = (cardData,title,time,img) =>{
  let formatData = cardData;
  formatData.unshift({
    title: title,
    time: time,
    img: img,
    onItemClick: 'itemOnClick'
  });
  return formatData;
}

module.exports = {
  formatTime: formatTime,
  cardData: cardData,
  unshiftCardData: unshiftCardData
}
