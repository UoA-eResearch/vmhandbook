---
title:  "Using Buzz on TranscribeDesktop"
categories: transcribedesktop howto
---

Buzz allows users to transcribe and translate audio offline, and allows for multiple audio recordings to be queued.

## Features

* Import audio and video and export transcripts to TXT, SRT, and VTT ([Demo](https://www.loom.com/share/cf263b099ac3481082bb56d19b7c87fe))files
* Transcribe and translate from your computer's microphone to text (Resource-intensive and may not be real-time, [Demo](https://www.loom.com/share/564b753eb4d44b55b985b8abd26b55f7))
* Supports [Whisper](https://github.com/openai/whisper#available-models-and-languages), [Whisper.cpp](https://github.com/ggerganov/whisper.cpp), [Faster Whisper](https://github.com/guillaumekln/faster-whisper), [Whisper-compatible Hugging Face models](https://huggingface.co/models?other=whisper), and the [OpenAI Whisper API](https://platform.openai.com/docs/api-reference/introduction)
* [Command-Line Interface](https://chidiwilliams.github.io/buzz/docs#command-line-interface)

## Current limitations
* When first running Buzz, it may take a long time (around two minutes) for the program to start. Subsequent runs of the program will be fast. 

## Getting started

1. Transfer the audio and video recordings you wish to transcribe into the virtual desktop. Follow [the instructions in the general guide](https://tutorials.rc.nectar.org.au/virtual-desktop-service/03-general-tasks#transferring-files).
2. From the desktop click on the Buzz icon [IMAGE] to open the Buzz interface.

![File import]({{ "/assets" | append: page.id | append: "/image18.png" | absolute_url }}){:width="600px"}

1. **Import a file** from your computer by clicking ‘file’ or the plus sign (+). A window will appear. Select the file you want to transcribe. By default, Buzz displays only audio files, but you can change this by selecting "all files" from the drop-down menu.
2. **Select the model type and size.** For optimal results, use Whisper by OpenAI and select the medium model. This combination provides accurate transcriptions without significant delays in most scenarios.
3. **Select the task (transcription or translation).**
4. **Choose the Language:** Select the target language.
5. Click **‘Run’**

    **Note:** You can import multiple files and they will be queued for transcription. Buzz Captions also supports a "detect language" function.

    ![Main screen]({{ "/assets" | append: page.id | append: "/image19.png" | absolute_url }}){:width="600px"}

6. **Review and Refine** Once the transcription process is complete, you can open the converted file by double-clicking on it. The text output will be displayed, and you can export it to different file types such as SRT and VTT files. These files include timestamps, which are useful for synchronizing audio with visual content.

7. Download the transcript from the virtual desktop to your computer. Follow [the instructions from the general guide](https://tutorials.rc.nectar.org.au/virtual-desktop-service/03-general-tasks#downloading-a-file-from-the-virtual-desktop-to-your-local-computer).

Buzz offers advanced options for more specific requirements, e.g. word level timings which creates timestamps for every word in the transcription. This feature proves useful for creators who want to generate captions for short-form videos. For general purposes, leave this option disabled. See the links below for more information.

## Useful instruction links

Import: <https://chidiwilliams.github.io/buzz/docs/usage/file_import>

Live recording: <https://chidiwilliams.github.io/buzz/docs/usage/live_recording>

Translation: <https://chidiwilliams.github.io/buzz/docs/usage/translations>

Edit and resize: <https://chidiwilliams.github.io/buzz/docs/usage/edit_and_resize>

Setting Preferences: <https://chidiwilliams.github.io/buzz/docs/preferences>

FAQs <https://chidiwilliams.github.io/buzz/docs/faq>