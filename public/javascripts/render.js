/* Global elements & varaible */
const amountList = document.querySelectorAll('.amount')
const totalAmount = document.querySelector('#total-amount')
const dtlLinkEle = document.querySelector('#detail-link')
const dtlLink = dtlLinkEle.dataset.href
const dtlLinkList = document.querySelectorAll('.link-col')
let sum = 0


// Main functions
sumup(amountList)
showSumAmount(sum)


// Functions
function sumup(list) {
  list.forEach(ele => {
    sum += Number(ele.innerText)
  })

}

function showSumAmount(sum) {
  totalAmount.innerText = sum
}


// Listeners
dtlLinkList.forEach(ele => {
  ele.addEventListener('click', () => {
    window.location.href = dtlLink
  },
  {once: true})
})

