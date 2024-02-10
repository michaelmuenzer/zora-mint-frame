import { base } from 'viem/chains';
import { getFrameMetadata } from '@coinbase/onchainkit';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CHAIN = base;
export const CONTRACT_ADDRESS = '0xfb3f8398693506548699ae0a70d85c2d3e76dcb8';
export const TOKEN_ID = 1n; // First collection is 1

export const FRAME_METADATA = getFrameMetadata({
  buttons: ['Mint'],
  image: `${SITE_URL}/opengraph-image.png`,
  post_url: `${SITE_URL}/api/frame`,
});
