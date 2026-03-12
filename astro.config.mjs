// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner = '', repo = ''] = repository ? repository.split('/') : [];
const isUserSite = owner !== '' && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const site = owner && repo
	? `https://${owner}.github.io${isUserSite ? '' : `/${repo}`}`
	: undefined;
const base = owner && repo && !isUserSite ? `/${repo}/` : '/';

// https://astro.build/config
export default defineConfig({
	site,
	base,
});
