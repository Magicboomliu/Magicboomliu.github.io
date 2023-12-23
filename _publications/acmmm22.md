---
title: "Digging Into Normal Incorporated Stereo Matching"
collection: publications
permalink: /publication/acmmm22
excerpt: 'Zihua Liu, Songyan Zhang, Zhicheng Wang and Masatoshi Okutomi'
date: 2022-04-01
venue: 'Proceedings of the 30th ACM International Conference on Multimedia.(ACMMM22)'
paperurl: 'https://dl.acm.org/doi/abs/10.1145/3503161.3548312'
citation: '@inproceedings{liu2022digging,
  title={Digging Into Normal Incorporated Stereo Matching},
  author={Liu, Zihua and Zhang, Songyan and Wang, Zhicheng and Okutomi, Masatoshi},
  booktitle={Proceedings of the 30th ACM International Conference on Multimedia},
  pages={6050--6060},
  year={2022}
}'
---
Despite the remarkable progress facilitated by learning-based stereo matching algorithms, disparity estimation in low-texture, occluded, and bordered regions still remain bottlenecks that limit the performance. To tackle these challenges, geometric guidance like plane information is necessary as it provides intuitive guidance about disparity consistency and affinity similarity. In this paper, we propose a normal incorporated joint learning that framework consisting of two specific modules named non-local disparity propagation(NDP) and affinity-aware residual learning(ARL). The estimated normal map is first utilized for calculating a non-local affinity matrix as well as a non-local offset to perform spatial propagation at the disparity level. To enhance geometric consistency, especially in low-texture regions, the estimated normal map is then leveraged to calculate a local affinity matrix which provides the residual learning with information about where the correction should refer and thus improve the residual learning efficiency. Extensive experiments on several public datasets including Scene Flow, KITTI 2015, and Middlebury 2014 validate the effectiveness of our proposed method. By the time we finished this work, our approach ranked 1st for stereo matching across foreground pixels on the KITTI 2015 dataset and 3rd on the Scene Flow dataset among all the published works.

[Paper](https://dl.acm.org/doi/abs/10.1145/3503161.3548312) |
[Code](https://github.com/Magicboomliu/GOAT)| [Project Page](http://www.ok.sc.e.titech.ac.jp/res/DeepSM/acmmm22.html) | [Video](https://www.bilibili.com/video/BV1G8411a7tU/?spm_id_from=333.337.search-card.all.click&vd_source=e899c007573da1ac5f71125f2a409eaa)  

![image](http://www.ok.sc.e.titech.ac.jp/res/DeepSM/figure/main_00.png)