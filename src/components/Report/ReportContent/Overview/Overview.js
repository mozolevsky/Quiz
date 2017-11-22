import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import TipText from '../Shared/TipText/TipText';
import ChartBlock from '../Shared/ChartBlock/ChartBlock';
import './Overview.css';


class Overview extends Component {
    render() {
        return (
           <div>
               <section className="overview__top">
                    <div className="overview__top-text">
                        <h1 className="title overview__top-title">Hey, Johanson.<br/> According to the quiz, <b>your body type is Vata.</b>
                        </h1>
                        <p className="overview__desc">When we discover our dosha, we learn where and how these forces move and accumulate, which leads us to understand how health or disease manifests in our body and psychology.</p>
                    </div>

                    <div className="overview__chart-wrapper">
                        <ChartBlock/>
                    </div>
               </section>

               <div className="overview__divider"></div>

               <h3 className="title">Here’s what you should know about Vata…</h3>
               <p>
                    When we discover our dosha, we learn where and how these forces move and accumulate,
                    which leads us to understand how health or disease manifests in our body and psychology.
                    By bringing awareness to our state of being, we learn about the strengths and weaknesses
                    in our constitution, e.g. those places unique to us which require more attention in order
                    to remain in balance.
                </p>
                <p>
                    When we speak about the doshas: Vata, Pitta, and Kapha, we are talking about the 
                    natural elements and their qualities of being: ether (space), air, fire, water, 
                    and earth. In their combinations, each participates in the construction of individual 
                    bodies and personalities. As each element has its own temperament and attribute to 
                    contribute, this leads to a certain tendency of expression within you.
                </p>

                <TipText 
                    title="Before you read on…"
                    descFirst="Some of the descriptions below might not quite fit with you, but remember that a Vata type also contains lesser amounts of Pita and Kapha which express themselves differently."
                    descSecond="So… if something here doesn’t seem to relate to your body, then know that the Pita and Kapha forces must be dominating this particular area within you are expressing different qualities."
                />

                <div className="overview__divider"></div>

                <h3 className="title">Vata’s Elemental Traits & Characteristics</h3>
                <p>Vata is brittle, airy, cold, prone roughness, wrinkling, and dryness: like a tree in the winter. It’s windy, 
                    and forces other things to move. You are slender, sensitive to chill, and suffer from dry or rough skin conditions, 
                    and irregular digestion or appetite. You are an imaginative, creative, quick thinking type of person. You love experiencing 
                    new things, ideas, people, and places. You grasp new concepts with vigor, but have a hard time holding onto them; maybe even 
                    your keys or other easily misplaced items. You experience bursts of energy and tend to walk and talk fast. You’re always on 
                    the go and often find the only way you feel productive is if you’re doing something all the time, but then wonder why you 
                    suddenly feel so tired. </p>
                <p>Being ruled by air, music and sounds move you into, or out of, balance. The big city life and the sounds of the world on 
                    the go can feel cacophonous and jarring to your more delicate sensibilities. You are emotionally sensitive, and find yourself 
                    moved to tears by feelings of beauty, grief, and gratitude. Your mind is always working.</p>

                <h3 className="title">Vata and Spirituality</h3>
                <p>As a Vata, you, more than any other dosha have the potential to successfully lead a very spiritual life, because of the 
                    association with ether - the principle spiritual substance in manifestation. If this is not an important part of your 
                    life yet, it might be worth considering.</p> 
                <p>Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci hendrerit lorem aliquet blandit. 
                    Pellentesque ac hendrerit nibh. Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci 
                    hendrerit lorem aliquet blandit. Pellentesque ac hendrerit nibh.</p> 
                <p>Vatas are also prone to feeling misunderstood, and you often are. Perhaps you recognize within yourself the personal 
                    experience that you feel different than your peers, or don’t belong, etc.</p> 
                <p>As a note of both validation and caution: one of the worst things you can do is take it upon yourself to try and be 
                    and desire what you see others wanting and expressing as their sense of self: this will only deplete and imbalance you. 
                    You can’t try and be part of the crowd, you have to forge your own path.</p> 

                <h3 className="title">Vata and the World</h3>
                <p>As a Vata, you, more than any other dosha have the potential to successfully lead a very spiritual life, because of 
                    the association with ether - the principle spiritual substance in manifestation. If this is not an important part of 
                    your life yet, it might be worth considering.</p> 
                <p>Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci hendrerit lorem aliquet blandit. 
                    Pellentesque ac hendrerit nibh. Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci 
                    hendrerit lorem aliquet blandit. Pellentesque ac hendrerit nibh.</p>

                <h3 className="title">Vata and Relationships</h3>
                <p>As a Vata, you, more than any other dosha have the potential to successfully lead a very spiritual life, because of 
                    the association with ether - the principle spiritual substance in manifestation. If this is not an important part of 
                    your life yet, it might be worth considering. </p>
                <p>Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci hendrerit lorem aliquet blandit. 
                    Pellentesque ac hendrerit nibh. Cras semper nisi vitae arcu congue euismod. In sit amet varius nisi. Nullam eu orci 
                    hendrerit lorem aliquet blandit. Pellentesque ac hendrerit nibh.</p>

                <h3 className="title">Vata and Daily Life</h3>
                <p>We recommend making a tiny space to spend an hour each day. We know this seems impossible for most people in their 
                    busy lives, but for YOU, it is essential you make it a point to “recharge”. This will support you to avoid becoming 
                    overwhelmed or anxious. If you have spiritual aspirations, this will preserve your vital energies.</p>

                <p>You need time to transition, and you need time outs. Choose activities that uplift your heart: this is your key to 
                    the universe. Choose meditation. Try a restorative vinyasa class instead. It’s ok to know and admit you need rest, 
                    grounding, and slowness. You tend to be go-go-go like the wind, and you need to add some earth and water and warmth 
                    into your life on a regular basis. As much as you might hate and reject it with every cell of your being: routine is 
                    very good and stabilizing for you</p>

                <p>When stressed, you tend to self-medicate with sugar, as the sweet taste feels nourishing and brings a sense of relief,
                     but you’re setting yourself up for a roller coaster if you don’t make it a point to support your constitutional needs. 
                     A blood sugar rise will only exacerbate your tendency to over-extend yourself when you actually need rest. 
                     The resulting crashes will only get bigger. Excessive stress is murder. It will quickly leave you feeling anxious 
                     and out of control. Insomnia is common under these conditions, as well as a tendency to forget to eat, and 
                     weight loss. </p>

                <ContinueBtn link="/report/foods-and-diet" txt="Foods and Diet"/>    
           </div>
        );
    }
}

export default Overview;