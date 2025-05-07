import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard  userName="midudev" initialIsFollowing={true}>
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard  userName="pheralb" initialIsFollowing={false}> 
        Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard  userName="leomessi" initialIsFollowing={true}>
        Leo Messi
      </TwitterFollowCard>

      <TwitterFollowCard userName="tupadre" initialIsFollowing={false}>
        Tu Jodido Padre
      </TwitterFollowCard>
    </section>
  );
}
