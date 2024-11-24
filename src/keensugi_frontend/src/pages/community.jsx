import React from 'react';
import '../styles/community.css';

const Community = () => {
  const handleJoinRequest = (groupName) => {
    const confirmed = window.confirm(
      `Request to join ${groupName}? You will be assigned an anonymous username upon acceptance.`
    );

    if (confirmed) {
      alert('Your request has been submitted. Current members will vote on your admission.');
    }
  };

  const handleVote = (proposalTitle, voteType) => {
    alert(`Your vote "${voteType}" for "${proposalTitle}" has been recorded.`);
  };

  return (
    <div className="community">
      <header className="header">
        <nav className="nav">
          <div className="logo">KINTARA</div>
          <div className="nav-controls">
            <div id="google_translate_element"></div>
            <a href="https://kintara.com" className="home-link">
              Main Website
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="support-groups">
          <h1 className="section-title">Support Groups</h1>
          <p className="section-description">
            Join our anonymous support groups to connect with others, share experiences, and find strength in
            community. All members use pseudonyms to maintain privacy and safety.
          </p>

          <div className="groups-container">
            {['Healing Circle', 'Local Support Network', 'Survivors Unite'].map((groupName, index) => (
              <div className="group-card" key={index}>
                <h3 className="group-name">{groupName}</h3>
                <p className="group-details">
                  {groupName === 'Healing Circle'
                    ? 'A safe space for sharing experiences and supporting each other through the healing journey.'
                    : groupName === 'Local Support Network'
                    ? 'Connect with others in your geographic area for local support and resources.'
                    : 'A community focused on empowerment, recovery, and moving forward together.'}
                </p>
                <div className="group-stats">
                  <span>Members: {index === 0 ? 45 : index === 1 ? 28 : 62}</span>
                  <span>Location: {index === 1 ? 'Regional' : 'Global'}</span>
                </div>
                <button
                  className="join-group-btn"
                  onClick={() => handleJoinRequest(groupName)}
                >
                  Request to Join
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="proposals-section">
          <h2 className="section-title">Community Proposals</h2>
          <p className="section-description">
            Vote on important community proposals to help shape our support network.
          </p>

          <div className="groups-container">
            {[
              {
                title: 'Weekly Virtual Support Sessions',
                details:
                  'Implement weekly virtual support sessions with professional counselors for all group members. Sessions would be conducted in small groups of 5-7 members.',
                votes: 156,
              },
              {
                title: 'Emergency Response Network',
                details:
                  'Create a 24/7 emergency response network connecting members with local support services and verified volunteers in crisis situations.',
                votes: 178,
              },
            ].map((proposal, index) => (
              <div className="proposal-card" key={index}>
                <h3 className="proposal-title">{proposal.title}</h3>
                <p className="proposal-details">{proposal.details}</p>
                <div className="vote-count">
                  Current Votes: {proposal.votes}/200 needed
                </div>
                <div className="voting-buttons">
                  <button
                    className="vote-btn"
                    onClick={() => handleVote(proposal.title, 'Vote in Favor')}
                  >
                    Vote in Favor
                  </button>
                  <button
                    className="vote-btn"
                    style={{
                      background: 'linear-gradient(45deg, #6b21a8, #4a1578)',
                    }}
                    onClick={() => handleVote(proposal.title, 'Vote Against')}
                  >
                    Vote Against
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Community;
