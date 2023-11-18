---
layout: page
permalink: /projects/omm/forest
title: Application to support workforce analytics
description: >
  Organizational models constructed around process event data can be applied to 
  profile human resource group behavior from multiple aspects relevant to 
  workforce performance.
nav: false
---

#### Empower HR Decisions with Workforce Analytics

<div class="row mb-3">
  <div class="col-6">
      <li>💯Organizational success depends on employees and how they are managed</li>
      <li>Good HR decisions need to be reinforced by timely and evidence-based
      insights💡</li>
      <li>📈Workforce analytics facilitates effective HR decisions by analyzing the
      deployment and performance of employees and their groups</li>
  </div>
  <div class="col-6 image-container">
    <img src="{{ '/assets/img/research-omm/forest/1-empower.png' | relative_url }}"
    class="figure-img img-fluid rounded" />
  </div>
</div>


#### Workforce Analytics &times; Process Mining: A Perfect Match

✅ Business process execution data --- readily available in many enterprise
  information systems --- is a promising source for workforce analytics

✅ We develop process mining methods that systematically exploit process
  data and support organizations to better understand their employees and
  continually improve HR decisions alongside core business processes

<div class="mx-auto d-block" style="width: 75%;">
<figure class="figure">
  <img src="{{ '/assets/img/research-omm/forest/2-wapm.png' | relative_url }}"
  class="figure-img img-fluid border rounded" 
  alt="workforce_analytics_process_mining">
</figure>
</div>

<div class="row mt-3">
  <div class="col-6">
    <ul>
      <li> A recent outcome of our ongoing research enables using common process
      data to analyze employee groups (departments, teams, etc.) from various
      aspects</li>
      <li> We apply interactive visualization techniques to allow analyses on
      multiple dimensions and across different levels</li>
    </ul>
  </div>
  <div class="col-6 image-container">
    <img src="{{ '/assets/img/research-omm/forest/3-aspects.png' | relative_url }}"
    class="figure-img img-fluid rounded" style="width: 75%;"/>
  </div>
</div>

#### Demo
The following demo is based on a case study conducted using data from
five municipalities working with a building permit handling process (data
source: BPI Challenge 2015).

##### Compare across groups and time periods

<div class="row my-3">
<figure class="figure mx-auto text-center">
  <img src="{{ '/assets/img/research-omm/forest/4-demo_compare.png' | relative_url }}"
  class="figure-img img-fluid border rounded" />
  <figcaption class="figure-caption">
    Productivity of five municipalities based on the amount of completed
    cases across a four-year period: The trend is similar while unique
    patterns exist.
  </figcaption>
</figure>
</div>

##### Understand groups from multiple dimensions

<div class="row my-3">
<figure class="figure mx-auto text-center">
  <img src="{{ '/assets/img/research-omm/forest/5-demo_multidim.png' | relative_url }}"
  class="figure-img img-fluid border rounded" style="width: 60%;" />
  <figcaption class="figure-caption">
    Workload of the five municipalities: <br>
    Their focuses on different process tasks seem to align (left), but 
    municipality #1 have its own working hours arrangements on Wednesdays (right)
  </figcaption>
</figure>
</div>

##### Explore and highlight patterns at different levels

<div class="row my-3">
<figure class="figure mx-auto text-center">
  <img src="{{ '/assets/img/research-omm/forest/6-demo_different_times.png' | relative_url }}"
  class="figure-img img-fluid border rounded" />
  <figcaption class="figure-caption">
    Expand the data on different time levels: the unique “batch working” 
    behavior of municipality #4 in certain months
  </figcaption>
</figure>
</div>

<div class="row">
<figure class="figure mx-auto text-center">
  <img src="{{ '/assets/img/research-omm/forest/6-demo_within_group.png' | relative_url }}"
  class="figure-img img-fluid border rounded" />
  <figcaption class="figure-caption">
    Drill down to within-group analyses: individual workload distributions 
    manifesting employees’ role differences
  </figcaption>
</figure>
</div>

##### Plug-in tailored measures to cater for different analyses

<div class="row my-3">
<figure class="figure mx-auto text-center">
  <img src="{{ '/assets/img/research-omm/forest/7-demo_measure.png' | relative_url }}"
  class="figure-img img-fluid border rounded" />
  <figcaption class="figure-caption">
    Various measures can be applied according to the purposes: <br>
    Productivity of the five municipalities is again analyzed, but 
    measured by average case throughput time
  </figcaption>
</figure>
</div>

#### Further Reading
- [Full paper on ResearchGate: *Seeing the Forest for the Trees: Group-Oriented Workforce Analytics*][bpm21fulltext]
- [Link to the full demo online][bpm21demo]
  
[bpm21fulltext]: https://www.researchgate.net/publication/352695691_Seeing_the_Forest_for_the_Trees_Group-Oriented_Workforce_Analytics
[bpm21demo]: https://roy-jingyang.github.io/Org-Forests/
