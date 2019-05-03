import React from 'react'
import html2canvas from 'html2canvas'
import JSPDF from 'jspdf'
import toPx from 'unit-to-px'

export const print = async (pages) => {
  let images = []

  await Promise.all(pages.map(async value => {
    const input = document.getElementById(value)

    const promise = new Promise(
      resolve => html2canvas(input).then(canvas => {
        resolve(canvas)
      })
    )

    await Promise.all([promise]).then(canvas => {
      const image = canvas[0].toDataURL('image/png')
      images.push(image)
    })
  }))

  images.length > 0 && download(images)
}

const download = images => {
  const pdf = new JSPDF()
  const pages = document.getElementById('pages').offsetHeight / toPx('297mm')

  for (let i = 0; i < Math.trunc(pages); i++) {
    i > 0 && i < Math.trunc(pages) && pdf.addPage()
    pdf.addImage(images[i], 'PNG', 0, 0)
  }
  pdf.save('download.pdf')
}

export default ({ children }) => {
  return (
    <div id='pages'>
      {children}
    </div>
  )
}
