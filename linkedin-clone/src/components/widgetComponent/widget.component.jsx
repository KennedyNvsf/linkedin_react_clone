
import React from "react";
import "../widgetComponent/_widget.style.scss";//styles

//icons
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';




const Widget = () => {

    const newsArticles = (heading, subtitle) => (

        <div className="widgetsArticle">

            <div className="widgetArticle_left">

                <FiberManualRecordIcon/>

            </div>

            <div className="widgetArticle_right">

                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
            


        </div>

    )


    return (

        <div className = "widgetSection">

                <div className="widgetHeader">
                    <h2>Linkedin News</h2>
                    <InfoIcon/>
                </div>

             {newsArticles( "CNN - TOP NEWS", "AI Robots continue attack in the U.S Capital")}
             {newsArticles( "Covid-19 - LASTEST UPDATES", "After 40 years of confinement the UN hints possible Covid-Zombie cure")}
             {newsArticles( "Local News", "Dunder Mifflin's branch manager, Michael Scott says that paper will save the American Economy crisis")}
             {newsArticles( "SPORTS", "NBA star, Stephen Curry hits one million 3pts record ")}
        </div>
    )
}

export default Widget;