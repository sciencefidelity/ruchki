import type { BlockContent, SanityImageAsset } from './sanity.types';

export type Author = {
	name: string | null;
	slug: string | null;
	twitterHandle: string | null;
	body: BlockContent | null;
};

export type Category = {
	_id: string;
	slug: string | null;
	title: string | null;
};

export type Home = {
	title: string | null;
	keywords: string | null;
	seoDescription: string | null;
	seoImage: SanityImageAsset | null;
	seoTitle: string | null;
};

export type Menu = {
	items: MenuItem[] | null;
};

export type MenuItem = {
	slug: string | null;
	title: string | null;
};

export type Page = {
	body: BlockContent;
	keywords: string | null;
	seoDescription: string | null;
	seoImage: SanityImageAsset | null;
	seoTitle: string | null;
	slug: string | null;
	title: string | null;
};

export type PostPreview = {
	author: Author | null;
	body: BlockContent | null;
	categories: Category[] | null;
	publishedAt: string | null;
	slug: string | null;
	title: string | null;
};

export type Site = {
	siteDescription: string | null;
	siteName: string | null;
	twitterHandle: string | null;
	url: string | null;
	keywords: string | null;
	seoDescription: string | null;
	seoImage: SanityImageAsset | null;
	seoTitle: string | null;
};

export type LayoutQueryResult = {
	home: Home;
	menu: Menu;
	site: Site;
};

export type BlogQueryResult = {
	posts: PostPreview[];
};

export type PostQueryResult = {
	post: {
		author: Author | null;
		body: BlockContent | null;
		categories: Category[] | null;
		next: {
			publishedAt: string | null;
			slug: string | null;
			title: string | null;
		} | null;
		previous: {
			publishedAt: string | null;
			slug: string | null;
			title: string | null;
		} | null;
		publishedAt: string | null;
		keywords: string | null;
		seoDescription: string | null;
		seoImage: SanityImageAsset | null;
		seoTitle: string | null;
		slug: string | null;
		title: string | null;
	};
};

export type PageQueryResult = {
	page: Page;
};

export type AuthorsQueryResult = {
	authors: Author &
		{
			posts: PostPreview[];
		}[];
};

export type AuthorQueryResult = {
	author: Author & {
		posts: PostPreview[];
	};
};

export type CategoriesQueryResult = {
	categories: Category[];
};

export type CategoryQueryResult = {
	category: Category & {
		posts: PostPreview[];
	};
};

export type TagsQueryResult = {
	posts: {
		keywords: string;
	}[];
};

export type TagQueryResult = {
	tag: string;
};
