import './App.css';

function TopHeader() {
  return (
    <div className="top-header">
      <p><strong>Introducing Collections and Profiles!</strong> Connect your wallet and go to your profile to get started!</p>
    </div>
  );
}

function Header() {
  return (
    <div className="header-container">
      <div className="header">

        <div className="navs">
          <img alt="VeeFriends Logo" />
          <a href="/">Library</a>
          <a href="/">Gary's Collection</a>
          <a href="/">Explore Friends</a>
          <button>Connect Wallet</button>
        </div>

      </div>
    </div>
  );
}

function MainInfo() {
  return (
    <div className="main-info">

      <div className="info-container">

        <div className="info">

          <a href="https://youtu.be/DmDieez1GYQ">What is VeeFriends?</a>
          <h1>Welcome to VeeFriends</h1>
          <p>
            A <font color="#ffc700">Gary Vaynerchuk</font> NFT project around meaningful intellectual property and an extraordinary community.
          </p>

          <div>
            <input type="text" placeholder="Search VeeFriends" />
            <button>Library</button>
          </div>

        </div>

        <div className="nft-display">
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/1842.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/487.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/1898.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/3332.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/160.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/1026.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/3505.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/490.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/1721.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/3477.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/528.png/143" alt="Test" />
          <img src="https://cdn.veefriends.com/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/3451.png/143" alt="Test" />
        </div>
      
      </div>

      <div className="recent">
        <hr />
        <h2>Recent Activity</h2>

        <div className="nfts-for-sale-container">

          <div className="nfts-for-sale">

            <div>

              <div className="nft-pic">
                <img 
                  src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/345.png/143" 
                  alt="NFT" 
                />
              </div>

              <div className="nft-info">

                <div className="top-info">
                  <p>#00770 1 of 20</p>
                  <img 
                    src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                    alt="pfp" 
                  />
                </div>

                <div className="main-info">
                  <p>Mammal</p>
                  <h3>Awesome African Civet</h3>
                  <p>Core</p>
                </div>
                
                <div className="price-info">
                  <p id="last-sale">Last Sale</p>
                  <p>Ξ 15</p>
                </div>

              </div>

            </div>

          </div>

          <div className="nfts-for-sale">

            <div>

              <div className="nft-pic">
                <img 
                  src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/608.png/143" 
                  alt="NFT" 
                />
              </div>

              <div className="nft-info">

                <div className="top-info">
                  <p>#03527 4 of 5</p>
                  <img 
                    src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                    alt="pfp" 
                  />
                </div>

                <div className="main-info">
                  <p>Mammal</p>
                  <h3>Genuine Giraffe</h3>
                  <p>Very Rare</p>
                </div>
                
                <div className="price-info">
                  <p id="last-sale">Last Sale</p>
                  <p>Ξ 25</p>
                </div>

              </div>

            </div>

          </div>

          <div className="nfts-for-sale">

            <div>

              <div className="nft-pic">
                <img 
                  src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/177.png/143" 
                  alt="NFT" 
                />
              </div>

              <div className="nft-info">

                <div className="top-info">
                  <p>#01925 7 of 8</p>
                  <img 
                    src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                    alt="pfp" 
                  />
                </div>

                <div className="main-info">
                  <p>Fish</p>
                  <h3>Compassionate Catfish</h3>
                  <p>Rare</p>
                </div>
                
                <div className="price-info">
                  <p id="last-sale">Last Sale</p>
                  <p>Ξ 16.8</p>
                </div>

              </div>

            </div>

          </div>

          <div className="nfts-for-sale">

            <div>

              <div className="nft-pic">
                <img 
                  src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/151.png/143" 
                  alt="NFT" 
                />
              </div>

              <div className="nft-info">

                <div className="top-info">
                  <p>#02248 2 of 20</p>
                  <img 
                    src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                    alt="pfp" 
                  />
                </div>

                <div className="main-info">
                  <p>Bird</p>
                  <h3>Curious Crane</h3>
                  <p>Core</p>
                </div>
                
                <div className="price-info">
                  <p id="last-sale">Last Sale</p>
                  <p>Ξ 17.95</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="featured">
          <hr />
          <h2>Featured Friends</h2>

          <div className="nfts-for-sale-container">
            <div className="nfts-for-sale">

              <div>

                <div className="nft-pic">
                  <img 
                    src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/345.png/143" 
                    alt="NFT" 
                  />
                </div>

                <div className="nft-info">

                  <div className="top-info">
                    <p>#00770 1 of 20</p>
                    <img 
                      src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                      alt="pfp" 
                    />
                  </div>

                  <div className="main-info">
                    <p>Mammal</p>
                    <h3>Awesome African Civet</h3>
                    <p>Core</p>
                  </div>
                  
                  <div className="price-info">
                    <p id="last-sale">Last Sale</p>
                    <p>Ξ 15</p>
                  </div>

                </div>

              </div>

              </div>

            <div className="nfts-for-sale">

              <div>

                <div className="nft-pic">
                  <img 
                    src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/608.png/143" 
                    alt="NFT" 
                  />
                </div>

                <div className="nft-info">

                  <div className="top-info">
                    <p>#03527 4 of 5</p>
                    <img 
                      src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                      alt="pfp" 
                    />
                  </div>

                  <div className="main-info">
                    <p>Mammal</p>
                    <h3>Genuine Giraffe</h3>
                    <p>Very Rare</p>
                  </div>
                  
                  <div className="price-info">
                    <p id="last-sale">Last Sale</p>
                    <p>Ξ 25</p>
                  </div>

                </div>

              </div>

            </div>

            <div className="nfts-for-sale">

              <div>

                <div className="nft-pic">
                  <img 
                    src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/177.png/143" 
                    alt="NFT" 
                  />
                </div>

                <div className="nft-info">

                  <div className="top-info">
                    <p>#01925 7 of 8</p>
                    <img 
                      src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                      alt="pfp" 
                    />
                  </div>

                  <div className="main-info">
                    <p>Fish</p>
                    <h3>Compassionate Catfish</h3>
                    <p>Rare</p>
                  </div>
                  
                  <div className="price-info">
                    <p id="last-sale">Last Sale</p>
                    <p>Ξ 16.8</p>
                  </div>

                </div>

              </div>

            </div>

            <div className="nfts-for-sale">

              <div>

                <div className="nft-pic">
                  <img 
                    src="https://res.cloudinary.com/nenvy-llc/image/upload/veefriends/remote-media/f6pXbdBrDkgJjmSV-_XTrDCsS97-QXp2H6Yu0fLSCB0/151.png/143" 
                    alt="NFT" 
                  />
                </div>

                <div className="nft-info">

                  <div className="top-info">
                    <p>#02248 2 of 20</p>
                    <img 
                      src="https://veefriends.com/api/users/0xe41ae892a261f96a363cae59c52c762f505cc36d/avatar/100" 
                      alt="pfp" 
                    />
                  </div>

                  <div className="main-info">
                    <p>Bird</p>
                    <h3>Curious Crane</h3>
                    <p>Core</p>
                  </div>
                  
                  <div className="price-info">
                    <p id="last-sale">Last Sale</p>
                    <p>Ξ 17.95</p>
                  </div>

                </div>

            </div>

              </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

function FAQ() {
  return (
    <div className="faq-container">
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <h3>What is VeeFriends?</h3>
        <p className="faq-answers">
          VeeFriends is the name of Gary Vaynerchuk's NFT collection. He created VeeFriends to bring to life his ambitions of building a community around his creative and business passions using NFT technology and their smart contract capabilities. By owning a VeeFriend NFT, you immediately become part of the VeeFriends community and get access to VeeCon.
        </p>
        <h3>Why NFTs?</h3>
        <p className="faq-answers">
          Much like 1995 and 2005, when Gary saw a macro trend with the internet and then Web 2.0, he knew the only way he was going to understand NFTs was to actually be a part of it. Gary believes that NFTs will be here for the rest of his life. Gary intends to actively be consulting, investing, advising and speaking about NFTs, and so he needed to have his own project to test, learn and understand everything about it. At the end of the day, Gary is a practitioner and operator. He would never speak about NFTs unless he was entrenched in how they work and involved firsthand in the process.
        </p>
        <h3>What is VeeCon?</h3>
        <p className="faq-answers">
          All VeeFriends token owners get access to VeeCon. VeeCon is a multi-day event exclusively for NFT holders. Your NFT will give you a three year access pass. The conference will be focused around business, marketing, ideas, creativity, entrepreneurship, innovation, competition and of course, fun. Gary's focus is to curate the best experience for his community, bringing enormous access and informational value to all the VeeFriends token holders in attendance. If you own two VeeFriends tokens, this means you have two tickets to VeeCon. All dates and locations will be announced at least 180 days in advance for VeeCon 2022, 2023, 2024. The first VeeCon will be held in North America before May 5, 2022.
        </p>
        <h3>What is so special about this NFT collection?</h3>
        <p className="faq-answers">
          Each NFT will have a specific message and meaning and provide metadata with on chain storage of media. The premise of Gary's approach is to create access and serve his community. VeeFriends are all about utility and access, meaning each NFT will have different levels of access and activities through the smart contract attached with each investment thus giving them "utility" through metadata. Over the last 15 years, he has spent time interacting with hundreds of thousands of people -- what VeeFriends will allow will be a structure around these interactions. The token is the key that unlocks you into Gary's world.
        </p>
        <h3>Where can I interact with other VeeFriend NFT collectors?</h3>
        <p className="faq-answers">
          We're always hanging out on our VeeFriends discord channel :)
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">

      <div>

        <div className="footer-top">

          <div id="newsletter">
            <h1>See you at VeeCon</h1>
            <h3>Subscribe and stay up to date on the newest updates.</h3>

            <div>
              <input type="text" placeholder="E-mail" />
              <button>Join Us!</button>
            </div>
            
          </div>

          <div>
            <h1>Follow the VeeFriends!</h1>
            <a href="/">Discord</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
            <a href="/">TikTok</a>
            <a href="/">YouTube</a>
          </div>

        </div>

      <hr />

        <div className="footer-middle">

          <div id="signature">
            <img alt="GaryVee Signature" />
            <h4>VeeFriends, LLC 2021</h4>
          </div>

          <div className="footer-middle-items">

            <div>
              <h2>VeeFriends</h2>
              <a href="/">Library</a>
              <a href="/">Explore All</a>
              <a href="/">Gary's Collection</a>
              <a href="/">Access</a>
              <a href="/">Gift</a>
              <a href="/">Blog</a>
            </div>

            <div>
              <h2>Connect</h2>
              <a href="/">My Profile</a>
              <a href="/">FAQ's</a>
              <a href="/">Discord</a>
              <a href="/">Instagram</a>
              <a href="/">Twitter</a>
              <a href="/">YouTube</a>
              <a href="/">Contact</a>
            </div>

            <div>
              <h2>GaryVee</h2>
              <a href="/">VeeCon</a>
              <a href="/">GaryVaynerChuck.com</a>
              <a href="/">VaynerNFT</a>
            </div>

          </div>

        </div>

      <hr />

        <div className="footer-bottom">
          <img alt="Powered by Nameless" />
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
        </div>

      </div>

    </div>
  );
}

function App() {
  return (
    <div className="App">
     <TopHeader />
     <Header />
     <MainInfo />
     <FAQ />
     <Footer />
    </div>
  );
}

export default App;