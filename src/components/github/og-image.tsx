/* eslint-disable @next/next/no-img-element */
export const GitHubImage: React.FC<{
  username: string;
}> = ({ username }) => {
  return (
    <div
      style={{
        display: 'flex',
        fontSize: 60,
        color: 'black',
        background: '#f6f6f6',
        width: '100%',
        height: '100%',
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        width="256"
        height="256"
        src={`https://github.com/${username}.png`}
        alt={`GitHub profile picture for ${username}`}
        style={{
          borderRadius: 128,
        }}
      />
      <p>github.com/{username}</p>
    </div>
  );
};
