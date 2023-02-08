import { useAuth } from 'utils/hooks/useAuth';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { user } = useAuth();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contact manager welcome {user.name || "a new user"} 
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        
      </h1>
    </div>
  );
}
