---
title: "DMS: Diffusion-Based Multi-Baseline Stereo Generation for Improving Self-Supervised Depth Estimation"
collection: publications
permalink: /publication/iccvw2025
excerpt: 'Zihua Liu, Yizhou Li, Songyan Zhang and Masatoshi Okutomi'
date: 2025-10-20
venue: 'IEEE/CVF International Conference on Computer Vision Workshops (ICCVW 2025), AIM Workshop'
paperurl: 'https://openaccess.thecvf.com/content/ICCV2025W/AIM/papers/Liu_DMS_Diffusion-Based_Multi-Baseline_Stereo_Generation_for_Improving_Self-Supervised_Depth_Estimation_ICCVW_2025_paper.pdf'
---

DMS uses a diffusion model to synthesize additional viewpoints along the stereo baseline from unlabeled stereo pairs. These views help recover pixel correspondences in occluded or out-of-frame regions, improving self-supervised stereo matching and monocular depth estimation.

[Paper](https://openaccess.thecvf.com/content/ICCV2025W/AIM/html/Liu_DMS_Diffusion-Based_Multi-Baseline_Stereo_Generation_for_Improving_Self-Supervised_Depth_Estimation_ICCVW_2025_paper.html) · [Code](https://github.com/Magicboomliu/DMS) · [Supplement](https://openaccess.thecvf.com/content/ICCV2025W/AIM/supplemental/Liu_DMS_Diffusion-Based_Multi-Baseline_ICCVW_2025_supplemental.pdf) · [Oral presentation program](https://cvlai.net/aim/2025/)

<figure id="dms-pipeline">
    <img src="{{ '/images/dms-iccvw2025.png' | relative_url }}" alt="DMS generates additional stereo views and uses them to supervise depth estimation with a per-pixel minimum warping loss" width="2047" height="1213" style="width: 100%; height: auto;"/>
    <figcaption>DMS pipeline, <a href="https://arxiv.org/html/2508.13091v1#S1.F1">Figure 1 by Zihua Liu, Yizhou Li, Songyan Zhang, and Masatoshi Okutomi</a>.</figcaption>
</figure>
