<section class="comments">
<h2>Comments</h2>
{% assign slug = page.id | slugify %}
{% for comment_hash in site.data.comments[slug] %}
{% assign comment = comment_hash[1] %}

<article class="comment">
<header>
    <p><b>{{comment.name}}</b> {% if comment.tripcode != "" %}<span class="tripcode">({{comment.tripcode}})</span>{% endif %}</p>
    <time datetime="{{comment.date | date_to_xmlschema}}">{{comment.date | date: "%Y-%m-%d %H:%M"}}</time>
</header>
<section class="comment-text">
{{comment.comment | markdownify }}
</section>
</article>

{% endfor %}
</section>