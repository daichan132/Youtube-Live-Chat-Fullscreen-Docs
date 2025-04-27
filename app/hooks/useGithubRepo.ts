import { useEffect, useState } from "react";

interface RepoData {
  full_name: string;
  owner: {
    avatar_url: string;
  };
  stargazers_count: number;
  description: string | null;
  language: string | null;
  updated_at: string;
  forks_count: number;
  open_issues_count: number;
}

interface UseGithubRepoResult {
  data: RepoData | null;
  isLoading: boolean;
  error: Error | null;
}

export function useGithubRepo(owner: string, repo: string): UseGithubRepoResult {
  const [data, setData] = useState<RepoData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchRepo() {
      setIsLoading(true);
      setError(null);
      
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!res.ok) throw new Error("Failed to fetch repo");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchRepo();
  }, [owner, repo]);

  return { data, isLoading, error };
}