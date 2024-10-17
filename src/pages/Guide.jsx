import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Use Prism or other themes
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style
import remarkGfm from 'remark-gfm'; // For GitHub-flavored markdown

// Import all markdown files explicitly
import briefingMarkdown from '../assets/Properties/blockchain-briefing/text.md';
import gearingupMarkdown from '../assets/Properties/blockchain-gearing-up/text.md';
import cheapglitchMarkdown from '../assets/Properties/blockchain-cheap-glitch/text.md';
import entrypointMarkdown from '../assets/Properties/blockchain-entry-point/text.md';
import barMarkdown from '../assets/Properties/blockchain-bar/text.md';
import rouletteMarkdown from '../assets/Properties/blockchain-roulette/text.md';
import blackjackMarkdown from '../assets/Properties/blockchain-master-of-blackjack/text.md';
import votingfrenzyMarkdown from '../assets/Properties/blockchain-voting-frenzy/text.md';
import vvvipmemberMarkdown from '../assets/Properties/blockchain-vvvip-member/text.md';
import injubankMarkdown from '../assets/Properties/blockchain-inju-bank/text.md';
import silentDealerMarkdown from '../assets/Properties/blockchain-silent-dealer/text.md';
import singularentityMarkdown from '../assets/Properties/blockchain-singular-entity/text.md';
import unlimitedCreditMarkdown from '../assets/Properties/blockchain-unlimited-credit-line/text.md';
import symbolofnobleMarkdown from '../assets/Properties/blockchain-symbol-of-noble/text.md';
import doubleordelegateMarkdown from '../assets/Properties/blockchain-double-or-delegate/text.md';
import injusgambitMarkdown from '../assets/Properties/blockchain-injus-gambit/text.md';
import casinobankbusterMarkdown from '../assets/Properties/blockchain-casino-bankbuster/text.md';
import executiveproblemsMarkdown from '../assets/Properties/blockchain-executive-problems/text.md';

import briefingArt from '../assets/Properties/blockchain-briefing/art.png';
import gearingupArt from '../assets/Properties/blockchain-gearing-up/art.png';
import cheapglitchArt from '../assets/Properties/blockchain-cheap-glitch/art.png';
import entrypointArt from '../assets/Properties/blockchain-entry-point/art.png';
import barArt from '../assets/Properties/blockchain-bar/art.png';
import rouletteArt from '../assets/Properties/blockchain-roulette/art.png';
import blackjackArt from '../assets/Properties/blockchain-master-of-blackjack/art.png';
import votingfrenzyArt from '../assets/Properties/blockchain-voting-frenzy/art.png';
import vvvipmemberArt from '../assets/Properties/blockchain-vvvip-member/art.png';
import injubankArt from '../assets/Properties/blockchain-inju-bank/art.png';
import silentDealerArt from '../assets/Properties/blockchain-silent-dealer/art.png';
import singularentityArt from '../assets/Properties/blockchain-singular-entity/art.png';
import unlimitedCreditArt from '../assets/Properties/blockchain-unlimited-credit-line/art.png';
import symbolofnobleArt from '../assets/Properties/blockchain-symbol-of-noble/art.png';
import doubleordelegateArt from '../assets/Properties/blockchain-double-or-delegate/art.png';
import injusgambitArt from '../assets/Properties/blockchain-injus-gambit/art.png';
import casinobankbusterArt from '../assets/Properties/blockchain-casino-bankbuster/art.png';
import executiveproblemsArt from '../assets/Properties/blockchain-executive-problems/art.png';

const Guide = () => {
  const { challengeCode } = useParams(); // Get the challengeCode from the URL
  const [post, setPost] = useState(''); // State to store the markdown content
  const [image, setImage] = useState('');
  const [data, setData] = useState(null); // State to store challenge data

  // Fetch the challenge data from the server and filter the appropriate challenge
  useEffect(() => {
    fetch('http://127.0.0.1:5000/Challenge')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
        console.log(response.json);
      })
      .then((challenges) => {
        // Find the specific challenge based on the challengeCode
        const selectedChallenge = challenges.find(
          (challenge) => challenge.challengeCode === challengeCode
        );

        if (selectedChallenge) {
          setData(selectedChallenge); // Store the challenge data
          // Map challenge codes to the corresponding markdown file
          const markdownMap = {
            'blockchain-briefing': [briefingMarkdown, briefingArt],
            'blockchain-gearing-up': [gearingupMarkdown, gearingupArt],
            'blockchain-cheap-glitch': [cheapglitchMarkdown, cheapglitchArt],
            'blockchain-entry-point': [entrypointMarkdown, entrypointArt],
            'blockchain-bar': [barMarkdown, barArt],
            'blockchain-roulette': [rouletteMarkdown, rouletteArt],
            'blockchain-master-of-blackjack': [blackjackMarkdown, blackjackArt],
            'blockchain-voting-frenzy': [votingfrenzyMarkdown, votingfrenzyArt],
            'blockchain-vvvip-member': [vvvipmemberMarkdown, vvvipmemberArt],
            'blockchain-inju-bank': [injubankMarkdown, injubankArt],
            'blockchain-silent-dealer': [silentDealerMarkdown, silentDealerArt],
            'blockchain-singular-entity': [singularentityMarkdown, singularentityArt],
            'blockchain-unlimited-credit-line': [unlimitedCreditMarkdown, unlimitedCreditArt],
            'blockchain-symbol-of-noble': [symbolofnobleMarkdown, symbolofnobleArt],
            'blockchain-double-or-delegate': [doubleordelegateMarkdown, doubleordelegateArt],
            'blockchain-injus-gambit': [injusgambitMarkdown, injusgambitArt],
            'blockchain-casino-bankbuster': [casinobankbusterMarkdown, casinobankbusterArt],
            'blockchain-executive-problems': [executiveproblemsMarkdown, executiveproblemsArt],
          };

          // Set the markdown content for the selected challenge
          if (challengeCode in markdownMap) {
            const [markdown, art] = markdownMap[challengeCode]
            setPost(markdown);
            setImage(art)
          } else {
            console.error('Markdown file not found for challengeCode:', challengeCode);
          }
        } else {
          console.error('Challenge data not found for challengeCode:', challengeCode);
        }
      })
      .catch((error) => console.error('Error fetching challenges:', error));
  }, [challengeCode]);

  return (
    <div className="heist-container">
        {data ? <h1>{data.challengeName}</h1> : <h1>Loading...</h1>}

        <div className="heist-challenge-image">
          <img src={image} alt="Challenge" />
        </div>

        <div className="heist-description-container">
          <h2>Story</h2>
          {data ? (
            <>
              {/* ReactMarkdown with Syntax Highlighting for Code Blocks */}
              <ReactMarkdown
                children={post}
                remarkPlugins={[remarkGfm]} // Enables GitHub-flavored markdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    // Check if it's an inline code or a code block
                    if (inline) {
                      return (
                        <code className="react-markdown-inline-code" {...props}>
                          {children}
                        </code>
                      );
                    } else {
                      const match = /language-(\w+)/.exec(className || '');
                      return match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus} // Use the theme of your choice
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }
                  }
                }}
                className="react-markdown-loader" /* React Component for Markdown */
              />
            </>
          ) : (
            <p>Loading challenge details...</p>
          )}
        </div>

        <div className="heist-code-container">
          <h2>Code</h2>
          <div className="heist-code-block">
            <code>
              // Code block content goes here...
            </code>
          </div>
          <button className="heist-copy-button">Copy Code</button>
        </div>
    </div>
  );
};

export default Guide;