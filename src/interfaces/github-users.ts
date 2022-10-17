import { GithubUser } from "./github-user";

export interface GihubUsersResponse {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}