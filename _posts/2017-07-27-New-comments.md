---
title: We finally have comments!
layout: post
category: Changelogs
image: new_comments/comments-square.png
image-banner: new_comments/comments.png
keywords: comments, disqus, jekyll, how-to, tech
id: new_comments
author: TheRandomMelon
comments: true
author-link: https://twitter.com/RandomMelonYT
desc: Learn more about our new comment system and how to do it.
---

# The TL;DR
If you want the basic message, here it is:


We finally have a new comments system, powered by <a href="https://disqus.com" target="_blank">Disqus</a>! Now, you can let us know what you thought of the post, or even just ask some questions about it! We're open to criticism.

Click <a href="#disqus_thread">here</a> to leave your thoughts.

# How to get it yourself (long version)
OK, you want to know how to do it yourself? Awesome! Let's get started.

## Requirements
You'll need:

- A pre-existing <a href="https://jekyllrb.com" target="_blank">Jekyll</a> blog (yes, GitHub or GitLab Pages will work)
- A <a href="https://disqus.com" target="_blank">Disqus</a> account
- Some basic knowledge of Liquid (Jekyll's language)

## I have those, now what?
Okay, you'll want to add your site to Disqus <a href="https://disqus.com/admin/create/" target="_blank">here</a>.

Once you've done that, create a file in ``_includes`` called ``disqus.html``, ``comments.html``, or something that'll be easy to remember.

Place this code into the file and modify to your needs:

{% raw %}
```html
{% if page.comments %}
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
this.page.url = "https://blog.domain.name{{ page.url }}"; // Use a Canonical URL
this.page.identifier = "{{ page.id }}"; // Replace this with your post's identifier
};
(function() { // Don't edit anything below this line, except when said to otherwise.
var d = document, s = d.createElement('script');

s.src = '//shortname.disqus.com/embed.js'; // Replace "shortname" with your shortname (e.g myamazingblog.disqus.com)

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% else %}
<p>Comments have been disabled for this post.</p>
{% endif %}
```
{% endraw %}

Then, add the following to ``_includes/post.html`` or whether else you want to add comments to:

{% raw %}
```liquid
{% include comments.html %}
```
{% endraw %}

Next, for comments to appear, you must add the following to your YAML front-matter for your posts:

```yaml
comments: true
```

Not including it will display whatever's in the ``else`` statement, which is "Comments have been disabled for this post".

## It's buggy/it doesn't work!
Leave a comment on this post, describing your problem in as much detail as possible, and I'll try to help you out. I'm not exactly a Disqus pro either, but hey.

That's all for now.
