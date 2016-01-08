var nodes = {
	"AudioInputI2S":                   {
		"type": "AudioInputI2S",
		"data": {
			"defaults":  {
				"name": {
					"value": "i2s"
				}
			},
			"shortName": "i2s",
			"inputs":    0,
			"outputs":   2,
			"category":  "input-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioInputAnalog":                {
		"type": "AudioInputAnalog",
		"data": {
			"defaults":  {
				"name": {
					"value": "adc"
				},
				"pin":  {
					"value": "A2",
					"call":  "(###pin###)"
				}
			},
			"shortName": "adc",
			"inputs":    0,
			"outputs":   1,
			"category":  "input-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioInputI2Sslave":              {
		"type": "AudioInputI2Sslave",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "i2ss",
			"inputs":    0,
			"outputs":   2,
			"category":  "input-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioOutputI2S":                  {
		"type": "AudioOutputI2S",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "i2s",
			"inputs":    2,
			"outputs":   0,
			"category":  "output-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioOutputSPDIF":                {
		"type": "AudioOutputSPDIF",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "spdif",
			"inputs":    2,
			"outputs":   0,
			"category":  "output-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioOutputAnalog":               {
		"type": "AudioOutputAnalog",
		"data": {
			"defaults":  {
				"name": {
					"value": "dac"
				}
			},
			"shortName": "dac",
			"inputs":    1,
			"outputs":   0,
			"category":  "output-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioOutputPWM":                  {
		"type": "AudioOutputPWM",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "pwm",
			"inputs":    1,
			"outputs":   0,
			"category":  "output-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioOutputI2Sslave":             {
		"type": "AudioOutputI2Sslave",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "i2ss",
			"inputs":    2,
			"outputs":   0,
			"category":  "output-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioMixer4":                     {
		"type": "AudioMixer4",
		"data": {
			"defaults":  {
				"name":  {
					"value": "mixer"
				},
				"gain0": {
					"value": 0.25,
					"call":  ".gain(0, ###gain0###)"
				},
				"gain1": {
					"value": 0.25,
					"call":  ".gain(1, ###gain1###)"
				},
				"gain2": {
					"value": 0.25,
					"call":  ".gain(2, ###gain2###)"
				},
				"gain3": {
					"value": 0.25,
					"call":  ".gain(3, ###gain3###)"
				}
			},
			"shortName": "mixer",
			"inputs":    4,
			"outputs":   1,
			"category":  "mixer-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioPlayMemory":                 {
		"type": "AudioPlayMemory",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "playMem",
			"inputs":    0,
			"outputs":   1,
			"category":  "play-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioPlaySdWav":                  {
		"type": "AudioPlaySdWav",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "playSdWav",
			"inputs":    0,
			"outputs":   2,
			"category":  "play-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioPlaySdRaw":                  {
		"type": "AudioPlaySdRaw",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "playSdRaw",
			"inputs":    0,
			"outputs":   1,
			"category":  "play-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioPlaySerialflashRaw":         {
		"type": "AudioPlaySerialflashRaw",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "playFlashRaw",
			"inputs":    0,
			"outputs":   1,
			"category":  "play-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioPlayQueue":                  {
		"type": "AudioPlayQueue",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "queue",
			"inputs":    0,
			"outputs":   1,
			"category":  "play-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioRecordQueue":                {
		"type": "AudioRecordQueue",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "queue",
			"inputs":    1,
			"outputs":   0,
			"category":  "record-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthWaveformSine":          {
		"type": "AudioSynthWaveformSine",
		"data": {
			"defaults":  {
				"name":      {
					"value": "new"
				},
				"amplitude": {
					"value":    "0.5",
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      1
				},
				"frequency": {
					"value": "1000",
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      22000
				},
				"phase":     {
					"value": "0",
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      360
				}
			},
			"shortName": "sine",
			"inputs":    0,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthWaveformSineModulated": {
		"type": "AudioSynthWaveformSineModulated",
		"data": {
			"defaults":  {
				"name":      {
					"value": "new"
				},
				"amplitude": {
					"value":    0.5,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      1
				},
				"frequency": {
					"value": 	1000,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      11000
				},
				"phase":     {
					"value": 	0,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      360
				}
			},
			"shortName": "sine_fm",
			"inputs":    1,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthWaveform":              {
		"type": "AudioSynthWaveform",
		"data": {
			"defaults":  {
				"name": {
					"value": "new"
				},
				"amplitude": {
					"value":    0.5,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      1
				},
				"frequency": {
					"value": 	1000,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      22000
				},
				"phase":     {
					"value": 	0,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      360
				}
			},
			"shortName": "waveform",
			"inputs":    0,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthToneSweep":             {
		"type": "AudioSynthToneSweep",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "tonesweep",
			"inputs":    0,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthWaveformDc":            {
		"type": "AudioSynthWaveformDc",
		"data": {
			"defaults":  {
				"name": {
					"value": "new"
				},
				"amplitude": {
					"value":    1,
					"validate": RED.nodes.isValidRange,
					"min":      -1,
					"max":      1,
					"call":  ".amplitude(###amplitude###, ###period###)"
				},
				"period": {
					"value": 	10,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      100000,
					"call":  "insert"
				}
			},
			"shortName": "dc",
			"inputs":    0,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthNoiseWhite":            {
		"type": "AudioSynthNoiseWhite",
		"data": {
			"defaults":  {
				"name": {
					"value": "new"
				},
				"amplitude": {
					"value":    0.5,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      1
				}
			},
			"shortName": "noise",
			"inputs":    0,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSynthNoisePink":             {
		"type": "AudioSynthNoisePink",
		"data": {
			"defaults":  {
				"name": {
					"value": "new"
				},
				"amplitude": {
					"value":    0.5,
					"validate": RED.nodes.isValidRange,
					"min":      0,
					"max":      1
				}
			},
			"shortName": "pink",
			"inputs":    0,
			"outputs":   1,
			"category":  "synth-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectFade":                 {
		"type": "AudioEffectFade",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "fade",
			"inputs":    1,
			"outputs":   1,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectChorus":               {
		"type": "AudioEffectChorus",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "chorus",
			"inputs":    1,
			"outputs":   1,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectFlange":               {
		"type": "AudioEffectFlange",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "flange",
			"inputs":    1,
			"outputs":   1,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectEnvelope":             {
		"type": "AudioEffectEnvelope",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "envelope",
			"inputs":    1,
			"outputs":   1,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectMultiply":             {
		"type": "AudioEffectMultiply",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "multiply",
			"inputs":    2,
			"outputs":   1,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectDelay":                {
		"type": "AudioEffectDelay",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "delay",
			"inputs":    1,
			"outputs":   8,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectDelayExternal":        {
		"type": "AudioEffectDelayExternal",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "delayExt",
			"inputs":    1,
			"outputs":   8,
			"category":  "effect-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioEffectBitcrusher":           {
		"type": "AudioEffectBitcrusher",
		"data": {"shortName": "bitcrusher", "inputs": 1, "outputs": 1, "category": "effect-function", "color": "#E6E0F8", "icon": "arrow-in.png"}
	},
	"AudioFilterBiquad":               {
		"type": "AudioFilterBiquad",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "biquad",
			"inputs":    1,
			"outputs":   1,
			"category":  "filter-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioFilterFIR":                  {
		"type": "AudioFilterFIR",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "fir",
			"inputs":    1,
			"outputs":   1,
			"category":  "filter-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioFilterStateVariable":        {
		"type": "AudioFilterStateVariable",
		"data": {
			"defaults":  {
				"name":          {
					"value": "new"
				},
				"frequency":     {
					"value": 0
				},
				"resonance":     {
					"value": 0
				},
				"octaveControl": {
					"value": 0
				}
			},
			"shortName": "filter",
			"inputs":    2,
			"outputs":   3,
			"category":  "filter-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioAnalyzePeak":                {
		"type": "AudioAnalyzePeak",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "peak",
			"inputs":    1,
			"outputs":   0,
			"category":  "analyze-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioAnalyzeFFT256":              {
		"type": "AudioAnalyzeFFT256",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "fft256",
			"inputs":    1,
			"outputs":   0,
			"category":  "analyze-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioAnalyzeFFT1024":             {
		"type": "AudioAnalyzeFFT1024",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "fft1024",
			"inputs":    1,
			"outputs":   0,
			"category":  "analyze-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioAnalyzeToneDetect":          {
		"type": "AudioAnalyzeToneDetect",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "tone",
			"inputs":    1,
			"outputs":   0,
			"category":  "analyze-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioAnalyzePrint":               {
		"type": "AudioAnalyzePrint",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "print",
			"inputs":    1,
			"outputs":   0,
			"category":  "analyze-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioControlSGTL5000":            {
		"type": "AudioControlSGTL5000",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "sgtl5000",
			"inputs":    0,
			"outputs":   0,
			"category":  "control-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioControlAK4558": {
		"type": "AudioControlAK4558",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "ak4558",
			"inputs":    0,
			"outputs":   0,
			"category":  "control-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioControlWM8731":              {
		"type": "AudioControlWM8731",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "wm8731",
			"inputs":    0,
			"outputs":   0,
			"category":  "control-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioControlWM8731master":        {
		"type": "AudioControlWM8731master",
		"data": {
			"defaults":  {"name": {"value": "new"}},
			"shortName": "wm8731m",
			"inputs":    0,
			"outputs":   0,
			"category":  "control-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	},
	"AudioSourceLoopContainer":        {
		"type": "AudioSourceLoopContainer",
		"data": {
			"defaults":  {
				"name": {
					"value": "loop"
				},
				"code": {
					"value": "void loop() {\n\n\n}\n"
				}
			},
			"shortName": "loop",
			"inputs":    0,
			"outputs":   0,
			"category":  "source-function",
			"color":     "#E6E0F8",
			"icon":      "arrow-in.png"
		}
	}
};
