montageDefine("fa592eb","ui/overview.reel/overview.html",{text:'<!DOCTYPE html><html><head>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"main"}}},"select":{"prototype":"native/ui/select.reel","properties":{"element":{"#":"select"}},"bindings":{"content":{"<-":"@owner.componentList"}}},"substitution":{"prototype":"ui/substitution.reel","properties":{"element":{"#":"substitution"}},"bindings":{"switchValue":{"<-":"@select.contentController.selection.0"}}},"SegmentedBar":{"prototype":"ui/segmented-bar.info/sample/main.reel","properties":{"element":{"#":"SegmentedBar"}}}}</script>\n</head>\n\n<body>\n<div data-montage-id=main data-montage-skin=light>\n    <select data-montage-id=select></select>\n\n    <hr>\n\n    <div data-montage-id=substitution>\n        \n        <div data-montage-id=SegmentedBar data-arg=SegmentedBar></div>\n    </div>\n</div>\n\n\n\n\n</body></html>'});