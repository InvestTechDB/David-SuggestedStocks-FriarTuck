import React from 'react';
import Newz from './news.jsx';
import css from '../../dist/styles.css';
var image = randomPhotoPicker();

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                source: 'Yahoo Finance',
                title: 'Stocks, Stocks, and more Stocks',
                description: 'Investing.com-Technology Stocks',
                viewership: 466,
                url: '#',
                img1: randomPhotoPicker(),
                img2: randomPhotoPicker(),
                img3: randomPhotoPicker(), 
                time: '7h'
            
        }
    }
}

    render() {
    return (
        <div>
         <div id={css.newsMainHead}>
            <h2><strong> News </strong></h2>
            <div id={css.showMore}>
            <h6> Show More </h6>
            <a href='#' />
            </div>
        </div>
        <div id={css.theNewz}>
            <Newz props={this.state.data} />
        <a href='https://www.google.com'/>
        </div>
        </div>
    )
    }

}


export default NewsList

function randomPhotoPicker() {
    var arr = [
'https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/pexels-photo-1043506.jpeg',
'https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/pexels-photo-1109541.jpeg',
'https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/pexels-photo-1288483.jpeg',
'https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/pexels-photo-196667.jpeg',
'https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/pexels-photo-684385.jpeg',
'https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/bull-landscape-nature-mammal-139399.jpeg',
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/business-time-clock-clocks-48770.jpeg?versionId=qi4kR1HJ8_JwDtjmwquPTBrC_dndQjSP`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/coins-currency-investment-insurance-128867.jpeg?versionId=Kx5T8jHcGEX7l9T.tSnylKiLxbdmbaFT`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/gold-bear-gummi-bears-bear-yellow-55825.jpeg?versionId=Z.lhUtDQBZxh7bmX__Aj4NYwDE043_hF`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/house-money-capitalism-fortune-12619.jpg?versionId=qHBNnx95bT5VQicd1lGkvsMcxhfv0suF`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/monkey-orangutan-animal-face-52530.jpeg?versionId=dBpEgm9JoDA5DrMMGb0cVd2AljljGFHQ`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/office-pen-calculator-computation-163032.jpeg?versionId=5eIOeGgdY871KvKyLV8j7vagSHqNpiTs`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo+(1).jpg?versionId=F7YrWsjddnZg4Gk3mDBbwlsyrz1EFpKA`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-1040157.jpeg?versionId=GQUcID5nIpFmhfMNIq_NVeROO1ZGRZtz`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-1097946.jpeg?versionId=5cliBzniR9MXkDs0JnTRsikSdki8.feg`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-1099296.jpeg?versionId=denTgzP0JNQo2ezLOrax5tRfqYwo98JU`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-1099339.jpeg?versionId=g5KD_lTkT0tcp31.tHSpVrIPgv0be27n`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-1108191.jpeg?versionId=UKJyeazpbhlYufvHPghwP.kF2hHAu.e6`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-1263324.jpeg?versionId=eHq4LHxqIx0fSqGtiRi5z7qx9ASHid3x`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-134643.jpeg?versionId=AVuh3VrCUjkHbL8cTS_K127ax_Wvrgkn`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-159888.jpeg?versionId=cjggSdqPxHQMK0BFppHPEvAYwmTAw3Vv`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-164527.jpeg?versionId=mGA.Aitx_Yp7DGIAjR0e7PcoxJ0TrV7g`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-210600.jpeg?versionId=Hcq7JuP4DtrKmCdIO2f5tHjRmXvhN2hz`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-213988.jpeg?versionId=uvW6ZVyACuXzEK0Dje90OUj7RX8V9Rub`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-227729.jpeg?versionId=kIF3ulum9PJabK49OPEOx1PakExPsEKg`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-262464.jpeg?versionId=dzMgJ658Rm2oQ7EbKYxu6JSJZwdRdmiH`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-302842.jpeg?versionId=wnhDoKfYMZzzATH4O00QvqXqWCwGPiuE`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-416998.jpeg?versionId=DyPZAapGXOImub422p.2lzCXySXmporL`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-534216.jpeg?versionId=v66McKi3l5e8NS6N6tabdVL3SwA0HzsF`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-730547.jpeg?versionId=durWoveevRdg.SKeoggB2IW9w8a_omGR`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-730567.jpeg?versionId=LPpL6f3gC_pu7dn5a6DcQLfEZfW.yJCg`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-730569.jpeg?versionId=Tzbjc2Pi7o7QHlpZ4iJaJHDVYNEcllks`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-802024.jpeg?versionId=Tqju.VK2gbCHBxJ.GrgqYV975e1CR4CT`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-844124.jpeg?versionId=jhnMUeodEPyZK8MnVP6hTaN4S.SvHR1n`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-913652.jpeg?versionId=wSlGxvsfOjmxS11A3v.aza6ZuGax36ku`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo-919436.jpeg?versionId=pDkzONtkDENrgYVIkyDXBdIboMZqCK35`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/pexels-photo.jpg?versionId=jF.Coedg0q14GoEucrJCWepVcxr5tS35`,
`https://s3.us-east-2.amazonaws.com/shayauninvestech/stockphotos/pics/newStock/pics/stock-iphone-business-mobile-38629.jpeg?versionId=JMezQxTBDRRJh9uMFCjWBiOKrotvoezg`
]
var randoIdx = Math.floor(Math.random() * arr.length);

return arr[randoIdx];
}