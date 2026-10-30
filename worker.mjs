export default {
  /** @param {Request} request @param {{ASSETS:{fetch:(request:Request)=>Promise<Response>}}} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (['pykaralake.com', 'www.pykaralake.com'].includes(url.hostname) &&
        (url.protocol !== 'https:' || url.hostname !== 'pykaralake.com')) {
      url.protocol = 'https:'; url.hostname = 'pykaralake.com'; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const explicit404 = /^\/404(?:\.html|\/)?$/.test(url.pathname);
    // Fetch the native error document through a missing asset route, avoiding HTML-normalization redirects.
    const assetRequest = explicit404 ? new Request(new URL('/__pykara_404_document__', url), request) : request;
    const asset = await env.ASSETS.fetch(assetRequest);
    if (asset.status === 404 || /^\/404(?:\.html|\/)?$/.test(url.pathname)) {
      const headers = new Headers(asset.headers);
      headers.set('X-Robots-Tag', 'noindex, follow');
      headers.delete('Location');
      return new Response(asset.body, {status:404, headers});
    }
    return asset;
  }
};
