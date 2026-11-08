---
permalink: /
title: "Zihua Liu (刘子桦)"
excerpt: "Machine learning engineer at Woven by Toyota working on logistics digital twins, multimodal perception, and GPU ML workflows."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="about-hero" aria-labelledby="about-focus">
  <div class="about-hero__intro">
    <p class="about-hero__eyebrow">Machine Learning Engineer · Woven by Toyota</p>
    <h2 id="about-focus">Multimodal ML for logistics digital twins</h2>
    <p>I build perception systems that reconstruct logistics sites in 3D, track activity across cameras, and use vision-language models to reason about what happened. I run GPU training and inference workflows on AWS and deliver reusable capabilities to customer teams in Japan and overseas.</p>
    <div class="about-hero__actions">
      <a class="about-hero__primary" href="{{ '/files/ZihuaLiu_Resume.pdf' | relative_url }}">Download CV <span aria-hidden="true">↓</span></a>
      <a href="#selected-research">Selected research <span aria-hidden="true">→</span></a>
    </div>
  </div>

  <div class="about-hero__system">
    <h3>Digital Genba pipeline</h3>
    <ol>
      <li><span>01</span> Multimodal data capture</li>
      <li><span>02</span> 3D Gaussian Splatting reconstruction</li>
      <li><span>03</span> Multi-camera detection and tracking</li>
      <li><span>04</span> VLM behavior analysis and reasoning</li>
    </ol>
  </div>
</section>

<p class="about-research-note">I hold a Ph.D. in Engineering from the Institute of Science Tokyo and have over five years of combined research and engineering experience. My research focuses on stereo vision, 3D reconstruction, and diffusion models, with work at CVPR, IROS, and the ICCV AIM Workshop.</p>

<h2 id="selected-research">Selected Research</h2>

<div id="stereosplat-plus" style="display: flex; flex-wrap: wrap; align-items: center; gap: 20px;">
    <div style="flex: 1 1 270px; min-width: 0;">
        <a href="{{ '/publication/iros2026' | relative_url }}#stereosplat-pipeline">
            <img src="{{ '/images/stereosplat-plus-iros2026.png' | relative_url }}" alt="StereoSplat+ pipeline from a single stereo pair to a refined 3D Gaussian reconstruction" width="1413" height="650" loading="lazy" style="width: 100%; max-width: 400px; height: auto;"/>
        </a>
    </div>
    <div style="flex: 1 1 270px; min-width: 0;">
        <h3><span class="conf-badge iros">IROS 2026</span> StereoSplat+: Feed-Forward Stereo Gaussian Splatting with Diffusion-Assisted Progressive Inference</h3>
        <p><b>Zihua Liu</b>, Masatoshi Okutomi<br>
            IEEE/RSJ International Conference on Intelligent Robots and Systems<br>
            <a href="https://arxiv.org/abs/2607.08808">📄 Paper</a> &nbsp; &nbsp;
            <a href="http://www.ok.sc.e.titech.ac.jp/res/StereoSplat-Plus-Website/">🌐 Project</a> &nbsp; &nbsp;
            <a href="https://github.com/Magicboomliu/StereoSplat_Plus">💻 Code</a> &nbsp; &nbsp;
            <a href="http://www.ok.sc.e.titech.ac.jp/res/StereoSplat-Plus-Website/#video">▶ Demo</a>
        </p>
    </div>
</div>

---

<div id="dms-iccvw2025" style="display: flex; flex-wrap: wrap; align-items: center; gap: 20px;">
    <div style="flex: 1 1 270px; min-width: 0;">
        <a href="{{ '/publication/iccvw2025' | relative_url }}#dms-pipeline">
            <img src="{{ '/images/dms-iccvw2025.png' | relative_url }}" alt="DMS pipeline for generating multi-baseline stereo views and training a self-supervised depth estimator" width="2047" height="1213" loading="lazy" style="width: 100%; max-width: 400px; height: auto;"/>
        </a>
    </div>
    <div style="flex: 1 1 270px; min-width: 0;">
        <h3><span class="conf-badge" style="background: linear-gradient(135deg, #8a3f12, #9b2850); color: white;">ICCVW 2025</span> DMS: Diffusion-Based Multi-Baseline Stereo Generation for Improving Self-Supervised Depth Estimation</h3>
        <p><b>Zihua Liu</b>, Yizhou Li, Songyan Zhang, Masatoshi Okutomi<br>
            ICCV 2025 AIM Workshop · Oral Presentation<br>
            <a href="https://openaccess.thecvf.com/content/ICCV2025W/AIM/html/Liu_DMS_Diffusion-Based_Multi-Baseline_Stereo_Generation_for_Improving_Self-Supervised_Depth_Estimation_ICCVW_2025_paper.html">📄 Paper</a> &nbsp; &nbsp;
            <a href="https://github.com/Magicboomliu/DMS">💻 Code</a> &nbsp; &nbsp;
            <a href="https://openaccess.thecvf.com/content/ICCV2025W/AIM/supplemental/Liu_DMS_Diffusion-Based_Multi-Baseline_ICCVW_2025_supplemental.pdf">📎 Supplement</a>
        </p>
    </div>
</div>

---

<div style="display: flex; flex-wrap: wrap; align-items: center;">
    <div style="flex: 1 1 300px;">
        <img src="../images/vsrd_cvpr24.jpg" alt="CVPR 2024" style="width: 100%; max-width: 400px;"/>
    </div>
    <div style="flex: 1 1 300px; margin-left: 20px;">
        <h3><span class="conf-badge cvpr">CVPR 2024</span> VSRD: Instance-Aware Volumetric Silhouette Rendering for Weakly Supervised 3D Object Detection </h3>
        <p><b>Zihua Liu*</b>, Hiroki Sakuma, Masatoshi Okutomi<br>  Proceedings of the IEEE/CVF Computer Vision and Pattern Recognition. <br> <a href="https://arxiv.org/abs/2404.00149">📄 Paper</a>  &nbsp; &nbsp;   <a href="http://www.ok.sc.e.titech.ac.jp/res/VSRD/">🌐 Project</a> &nbsp; &nbsp; <a href="https://github.com/skmhrk1209/VSRD">💻 Code</a>
        </p>
    </div>
</div>

---

<div style="display: flex; flex-wrap: wrap; align-items: center;">
    <div style="flex: 1 1 300px;">
        <img src="../images/icra2024.png" alt="ICRA 2024" style="width: 100%; max-width: 400px;"/>
    </div>
    <div style="flex: 1 1 300px; margin-left: 20px;">
        <h3><span class="conf-badge icra">ICRA 2024</span> CFDNet: A Generalizable Foggy Stereo Matching Network with Contrastive Feature Distillation. </h3>
        <p><b>Zihua Liu</b>, Yizhou Li, Masatoshi Okutomi<br>  IEEE International Conference on Robotics and Automation <br> <a href="https://arxiv.org/abs/2402.18181">📄 Paper</a>  &nbsp; &nbsp;   <a href="http://www.ok.sc.e.titech.ac.jp/res/FStereo/icra2024.html">🌐 Project</a> &nbsp; &nbsp; <a href="http://www.ok.sc.e.titech.ac.jp/res/FStereo/icra2024.html">💻 Code</a>
        </p>
    </div>
</div>

---

<div style="display: flex; flex-wrap: wrap; align-items: center;">
    <div style="flex: 1 1 300px;">
        <img src="../images/wacv24.png" alt="Wacv 2024" style="width: 100%; max-width: 400px; height: 5%; max-height: 280px"/>
    </div>
    <div style="flex: 1 1 300px; margin-left: 20px;">
        <h3><span class="conf-badge wacv">WACV 2024</span> Global Occlusion-Aware Transformer for Robust Stereo Matching. </h3>
        <p><b>Zihua Liu</b>, Yizhou Li, Masatoshi Okutomi <br>  Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision <br> <a href="https://arxiv.org/abs/2402.18181">📄 Paper</a>  &nbsp; &nbsp;   <a href="https://openaccess.thecvf.com/content/WACV2024/html">🌐 Project</a> &nbsp; &nbsp; <a href="https://github.com/Magicboomliu/GOAT">💻 Code</a>
        </p>
    </div>
</div>

---

<div style="display: flex; flex-wrap: wrap; align-items: center;">
    <div style="flex: 1 1 300px;">
        <img src="../images/acmmm22.png" alt="Wacv 2024" style="width: 100%; max-width: 400px; height: 5%; max-height: 280px"/>
    </div>
    <div style="flex: 1 1 300px; margin-left: 20px;">
        <h3><span class="conf-badge acmmm">ACM MM 2022</span> Digging Into Normal Incorporated Stereo Matching.  </h3>
        <p><b>Zihua Liu</b>, Songyan Zhang, Zhicheng Wang, Masatoshi Okutomi<br> Proceedings of the 30th ACM International Conference on Multimedia <br> <a href="https://dl.acm.org/doi/abs/10.1145/3503161.3548312">📄 Paper</a>  &nbsp; &nbsp;   <a href="http://www.ok.sc.e.titech.ac.jp/res/DeepSM/acmmm22.html">🌐 Project</a> &nbsp; &nbsp; <a href="https://github.com/Magicboomliu/NINet">💻 Code</a>
        </p>
    </div>
</div>

---



<div style="display: flex; flex-wrap: wrap; align-items: center;">
    <div style="flex: 1 1 300px;">
        <img src="../images/bmvc24.png" alt="BMVC24" style="width: 100%; max-width: 400px; height: 5%; max-height: 280px"/>
    </div>
    <div style="flex: 1 1 300px; margin-left: 20px;">
        <h3><span class="conf-badge" style="background: linear-gradient(135deg, #f093fb, #f5576c); color: white;">BMVC 2024</span> Disparity Estimation Using a Quad-pixel Sensor. </h3>
        <p>Zhuofeng Wu, D.Lee, <b>Zihua Liu</b>, K.Yoshizaki, Masatoshi Okutomi <br> The Thirty Fifth British Machine Vision Conference <br> <a href="https://arxiv.org/abs/2409.00665">📄 Paper</a>  &nbsp; &nbsp;   <a href="http://www.ok.sc.e.titech.ac.jp/res/QP/index.html">🌐 Project</a> &nbsp; &nbsp; <a href="https://github.com/Zhuofeng-Wu/QPDNet">💻 Code</a>  &nbsp; &nbsp; <a href="https://www.dropbox.com/scl/fi/0sijedbg2kdqetmw16s9t/QP-Data-Zhuofeng-Wu.zip?rlkey=m33xsb70b4ivk0riyvg4fgk2u&e=1&st=k2fn4zkq&dl=0">📦 Dataset</a>
        </p>
    </div>
</div>


<div style="display: flex; flex-wrap: wrap; align-items: center;">
    <div style="flex: 1 1 300px;">
        <img src="../images/tdm.png" alt="MMM25" style="width: 100%; max-width: 250px; height: 5%; max-height: 280px"/>
    </div>
    <div style="flex: 1 1 300px; margin-left: 20px;">
        <h3><span class="conf-badge" style="background: linear-gradient(135deg, #fa709a, #fee140); color: #333;">MMM 2025</span> <span class="award-badge">🏆 Best Student Paper</span> TDM: Temporally-Consistent Diffusion Model for All-in-One Real-World Video Restoration </h3>
        <p>Yizhou Li, <b>Zihua Liu</b>, Yusuke Monno, Masatoshi Okutomi <br> MultiMedia Modeling: 31st International Conference on Multimedia Modeling <br> <a href="https://link.springer.com/chapter/10.1007/978-981-96-2071-5_12">📄 Paper</a>  &nbsp; &nbsp;   <a href="http://www.ok.sc.e.titech.ac.jp/res/TDM/index.html">🌐 Project</a> &nbsp; &nbsp; <a href="https://github.com/Yizhou-Li-CV/TDM">💻 Code</a>  
        </p>
    </div>
</div>

<h2 id="experience">Experience</h2>

*  **Woven by Toyota, Machine Learning Engineer (Permanent)** · 2026/04/01~<br>
    Tokyo, Japan. I build the multimodal perception pipeline for logistics digital twins and the AWS workflows that run GPU training and inference.<br>
    Mentor: [Suxing Lyu](https://www.linkedin.com/in/suxing-lyu/?originalSubdomain=jp)

*  **Woven by Toyota, Machine Learning Engineering Intern** · 2025/08/01-2026/03/31<br>
    Tokyo, Japan<br>
    Mentor: [Suxing Lyu](https://www.linkedin.com/in/suxing-lyu/?originalSubdomain=jp)


*  **Sony, R&D Intern** · 2025/01/15- 2025/03/31<br>
   Tokyo, Japan. Trained a multi-view diffusion model on the GAIA GPU cluster using synchronized LiDAR, imagery, 3D boxes, and text.<br>
   Supervisor: [Guifen Tian](https://scholar.google.co.jp/citations?hl=ja&user=tBAN-dgAAAAJ&view_op=list_works&sortby=pubdate)


*  **Preferred Networks, R&D Intern** · 2024/08/05-2024/09/30<br>
   Tokyo, Japan<br>
   Supervisor: [Taizan Yonetsuji](https://ieeexplore.ieee.org/author/38320112600)


*  **SenseTime Japan, Researcher Intern** · 2023/06/05-2023/11/30<br>
   Tokyo, Japan. Co-developed VSRD (CVPR 2024), using 2D masks to generate 3D pseudo-labels without manual 3D box annotations for training.<br>
   Supervisor: [Hiroki Sakuma](https://www.linkedin.com/in/hiroki-sakuma-9a20a4255/?originalSubdomain=jp)

*  **MEGVII, Computer Vision Engineering Intern** · 2022/01/05-2022/03/30<br>
   Shanghai, China. Improved parking-slot detection recall by 10%. The model was adopted in Megvii’s automatic-parking perception pipeline.

*  **Tokyo Institute of Technology, Research Assistant** · 2024/04/01- Now<br>
   Tokyo, Japan<br>
   Supervisor: [Masatoshi Okutomi](http://www.ok.sc.e.titech.ac.jp/mem/mxo/okutomi-j.html)

<h2 id="news">News</h2>

* [06/2026] Our paper [StereoSplat+](#stereosplat-plus) was accepted at IROS 2026. The [arXiv preprint](https://arxiv.org/abs/2607.08808) is available.
* [06/2026] Received Best Paper Award, Symposium on Sensing via Image Information ([SSII 2025](http://www.ok.sc.e.titech.ac.jp/topic/SSII2026Wu.jpg)).
* [03/2026] I have received the "Graduate Research Encouragement Award" from the Society of Automotive Engineers of Japan (JSAE).
* [01/2026] I have completed my PhD defense presentation for the doctoral thesis in the Institute of Science, Tokyo, titled "Deep Learning Based Stereo Vision: From Robust Stereo Matching to Feed-Forward 3D Reconstruction."
* [07/2025] Our paper [DMS](#dms-iccvw2025) was accepted for an oral presentation at the ICCV 2025 AIM Workshop.
* [01/2025] Our paper titled "TDM: Temporally-Consistent Diffusion Model for All-in-One Real-World Video Restoration" has been selected as the Best Student Paper for MMM2025.
* [10/2024] One paper was accepted by MMM 2025.
* [07/2024] One paper was accepted by BMVC 2024.
* [02/2024] One paper was accepted by CVPR 2024.
* [02/2024] One paper was accepted by ICRA 2024.
* [10/2023] One paper was accepted by WACV 2024.
* [06/2023] Started internship at SenseTime Japan.
* [04/2023] Received Tokyo Tech Advanced Human Resource Development Fellowship.
* [03/2023] Received the SCIE Student Award.
* [03/2023] Received Excellent Graduation Paper Award.
* [06/2022] One paper was accepted by ACM MM 2022.

🏅 Honors & Awards 
======
*  Tokyo Tech Advanced Human Resource Development Fellowship. &emsp;&emsp;&emsp;&emsp; 2023/04-2026/04  
*  SCIE Student Award. &emsp;&emsp;&emsp;&emsp; 2023/03 

🤝  Services
======

* Reviewer for the CVPR2025, ICML2025 and ICLR2025  &emsp;&emsp;&emsp;&emsp; 2025                  


* Reviewer for the ACM International Conference on Multimedia  &emsp;&emsp;&emsp;&emsp; 2022,2024                  

* Reviewer for the BMVC  &emsp;&emsp;&emsp;&emsp;2024   

* Reviewer for the NeurIPS &emsp;&emsp;&emsp;&emsp;2024   

* Reviewer for the ICLR &emsp;&emsp;&emsp;&emsp;2024   


